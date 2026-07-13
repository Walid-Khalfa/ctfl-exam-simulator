import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

type AppRole = "admin" | "student";

interface AuthState {
  session: Session | null;
  user: User | null;
  role: AppRole | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

// Ensure the signed-in user has a profile row and (at minimum) the student
// role. RLS allows a user to self-insert their own profile and self-assign the
// student role, so this is safe to run client-side.
async function ensureProfileAndRole(user: User) {
  try {
    await supabase.from("profiles").upsert(
      {
        id: user.id,
        full_name:
          (user.user_metadata?.full_name as string) ||
          (user.user_metadata?.name as string) ||
          user.email?.split("@")[0] ||
          "",
      },
      { onConflict: "id" },
    );
    const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", user.id);
    if (!roles || roles.length === 0) {
      await supabase.from("user_roles").insert({ user_id: user.id, role: "student" });
    }
  } catch {
    // Non-fatal; role resolution below handles the fallback.
  }
}

async function fetchRole(userId: string): Promise<AppRole> {
  const { data } = await supabase.from("user_roles").select("role").eq("user_id", userId);
  if (data?.some((r) => r.role === "admin")) return "admin";
  return "student";
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [role, setRole] = useState<AppRole | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const { data: sub } = supabase.auth.onAuthStateChange((event, newSession) => {
      if (!active) return;
      setSession(newSession);
      if (newSession?.user) {
        // Defer Supabase calls out of the callback to avoid deadlocks.
        setTimeout(async () => {
          if (event === "SIGNED_IN") await ensureProfileAndRole(newSession.user);
          const r = await fetchRole(newSession.user.id);
          if (active) setRole(r);
        }, 0);
      } else {
        setRole(null);
      }
    });

    supabase.auth.getSession().then(async ({ data }) => {
      if (!active) return;
      setSession(data.session);
      if (data.session?.user) {
        const r = await fetchRole(data.session.user.id);
        if (active) setRole(r);
      }
      setLoading(false);
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ session, user: session?.user ?? null, role, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
