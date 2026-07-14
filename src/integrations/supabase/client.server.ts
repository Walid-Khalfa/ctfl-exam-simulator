/* eslint-disable @typescript-eslint/no-explicit-any */
import { createMockSupabaseClient } from "./mock-client";

function createSupabaseAdminClient() {
  const mock = createMockSupabaseClient() as any;
  // Sign in asynchronously in the background as admin@example.com
  (async () => {
    try {
      const { auth } = await import("./mock-client");
      const fbAuth = await import("firebase/auth");
      const { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } = fbAuth;
      const adminEmail = "admin@example.com";
      const password = "default_safe_password_123";
      try {
        await signInWithEmailAndPassword(auth, adminEmail, password);
      } catch (e: any) {
        if (e.code === "auth/user-not-found" || e.code === "auth/invalid-credential") {
          const res = await createUserWithEmailAndPassword(auth, adminEmail, password);
          await updateProfile(res.user, { displayName: "ADMIN" });
        }
      }
    } catch (err) {
      console.error("Admin mock client sign-in failed:", err);
    }
  })();
  return mock;
}

let _supabaseAdmin: ReturnType<typeof createSupabaseAdminClient> | undefined;

// Server-side Supabase client with service role - bypasses RLS
// SECURITY: Only use this for trusted server-side operations, never expose to client code
// Load inside server handlers: const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
// Top-level import is safe only in other .server.ts modules - route files and *.functions.ts ship to the client bundle.
export const supabaseAdmin = new Proxy({} as ReturnType<typeof createSupabaseAdminClient>, {
  get(_, prop, receiver) {
    if (!_supabaseAdmin) _supabaseAdmin = createSupabaseAdminClient();
    return Reflect.get(_supabaseAdmin, prop, receiver);
  },
});
