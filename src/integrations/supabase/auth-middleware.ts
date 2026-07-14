/* eslint-disable @typescript-eslint/no-explicit-any */
import { createMiddleware } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { createMockSupabaseClient } from "./mock-client";

export const requireSupabaseAuth = createMiddleware({ type: "function" }).server(
  async ({ next }) => {
    const request = getRequest();
    let userId = "student-user-uuid";
    let userEmail = "student@example.com";

    if (request?.headers) {
      const cookieHeader = request.headers.get("cookie") || "";
      const cookies = Object.fromEntries(
        cookieHeader.split(";").map((c) => {
          const parts = c.trim().split("=");
          return [parts[0], parts.slice(1).join("=")];
        }),
      );
      if (cookies["auth_user_id"]) {
        userId = cookies["auth_user_id"];
        userEmail = userId + "@example.com";
      }
    }

    const mockClient = createMockSupabaseClient();

    // Ensure server-side mock client is signed in to Firebase Auth
    try {
      const { auth } = await import("./mock-client");
      const fbAuth = await import("firebase/auth");
      const { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } = fbAuth;
      const password = "default_safe_password_123";

      if (auth.currentUser?.email !== userEmail) {
        try {
          await signInWithEmailAndPassword(auth, userEmail, password);
        } catch (e: any) {
          if (e.code === "auth/user-not-found" || e.code === "auth/invalid-credential") {
            try {
              const res = await createUserWithEmailAndPassword(auth, userEmail, password);
              await updateProfile(res.user, {
                displayName: userEmail.split("@")[0].toUpperCase(),
              });
            } catch (createErr: any) {
              if (createErr.code === "auth/operation-not-allowed") {
                console.warn(
                  "[Firebase Server Auth] Email/Password provider is not enabled in Firebase Console. Falling back to local mock session.",
                );
                (auth as any)._mockUser = {
                  uid: "mock-user-" + userEmail.replace(/[^a-zA-Z0-9]/g, "-"),
                  email: userEmail,
                  displayName: userEmail.split("@")[0].toUpperCase(),
                };
              } else {
                console.error("[Firebase Server Auth] Auto-registration failed:", createErr);
              }
            }
          } else if (e.code === "auth/operation-not-allowed") {
            console.warn(
              "[Firebase Server Auth] Email/Password provider is not enabled in Firebase Console. Falling back to local mock session.",
            );
            (auth as any)._mockUser = {
              uid: "mock-user-" + userEmail.replace(/[^a-zA-Z0-9]/g, "-"),
              email: userEmail,
              displayName: userEmail.split("@")[0].toUpperCase(),
            };
          } else {
            console.error("[Firebase Server Auth] Sign-in failed:", e);
          }
        }
      }
    } catch (importErr) {
      console.error("[Firebase Server Auth] Failed to initialize server auth:", importErr);
    }

    return next({
      context: {
        supabase: mockClient as any,
        userId: userId,
        claims: {
          sub: userId,
          email: userEmail,
        },
      },
    });
  },
);
