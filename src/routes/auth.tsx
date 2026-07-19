import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { GraduationCap } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/hooks/useAuth";
import { ThemeToggle } from "@/components/ThemeToggle";
import { t } from "@/lib/i18n";

const searchSchema = z.object({
  mode: z.enum(["login", "signup", "forgot"]).optional(),
});

export const Route = createFileRoute("/auth")({
  validateSearch: searchSchema,
  component: AuthPage,
});

function AuthPage() {
  const { mode } = Route.useSearch();
  const navigate = useNavigate();
  const { session, loading } = useAuth();
  const [view, setView] = useState<"login" | "signup" | "forgot">(mode ?? "login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && session) navigate({ to: "/dashboard", replace: true });
  }, [loading, session, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (view === "forgot") {
        await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        toast.success(t.auth.resetSent);
        setView("login");
        return;
      }
      if (view === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { full_name: fullName },
          },
        });
        if (error) throw error;
        toast.success(t.auth.checkEmail);
        return;
      }
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      navigate({ to: "/dashboard", replace: true });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setBusy(false);
    }
  };

  const titles = {
    login: { title: t.auth.loginTitle, subtitle: t.auth.loginSubtitle },
    signup: { title: t.auth.signupTitle, subtitle: t.auth.signupSubtitle },
    forgot: { title: t.auth.resetTitle, subtitle: t.auth.resetSubtitle },
  }[view];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-4 w-4" />
          </span>
          <span className="font-display text-sm font-semibold">{t.appName}</span>
        </Link>
        <ThemeToggle />
      </div>

      <div className="flex flex-1 items-center justify-center px-4 py-8">
        <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm">
          <h1 className="font-display text-2xl font-bold text-foreground">{titles.title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{titles.subtitle}</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {view === "signup" && (
              <div className="space-y-1.5">
                <Label htmlFor="fullName">{t.common.fullName}</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  autoComplete="name"
                />
              </div>
            )}
            <div className="space-y-1.5">
              <Label htmlFor="email">{t.common.email}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            {view !== "forgot" && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">{t.common.password}</Label>
                  {view === "login" && (
                    <button
                      type="button"
                      onClick={() => setView("forgot")}
                      className="text-xs text-primary hover:underline"
                    >
                      {t.auth.forgotPassword}
                    </button>
                  )}
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  autoComplete={view === "signup" ? "new-password" : "current-password"}
                />
              </div>
            )}

            <Button type="submit" className="w-full" disabled={busy}>
              {busy
                ? t.common.loading
                : view === "login"
                  ? t.common.signIn
                  : view === "signup"
                    ? t.common.signUp
                    : t.auth.resetSend}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            {view === "login" && (
              <>
                {t.auth.noAccount}{" "}
                <button onClick={() => setView("signup")} className="text-primary hover:underline">
                  {t.common.signUp}
                </button>
              </>
            )}
            {view === "signup" && (
              <>
                {t.auth.haveAccount}{" "}
                <button onClick={() => setView("login")} className="text-primary hover:underline">
                  {t.common.signIn}
                </button>
              </>
            )}
            {view === "forgot" && (
              <button onClick={() => setView("login")} className="text-primary hover:underline">
                {t.common.back}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
