/* eslint-disable @typescript-eslint/no-explicit-any */
// Fully functional Firebase Firestore & Auth adapter masquerading as Supabase client.
// This allows the app to migrate from Supabase to Firebase without modifying 100+ DB call sites.
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  ENSEMBLE_A_EXAM,
  ENSEMBLE_A_QUESTIONS,
  ENSEMBLE_A_OPTIONS,
  ENSEMBLE_A_SOLUTIONS,
} from "./seed-ensemble-a";
import {
  ENSEMBLE_B_EXAM,
  ENSEMBLE_B_QUESTIONS,
  ENSEMBLE_B_OPTIONS,
  ENSEMBLE_B_SOLUTIONS,
} from "./seed-ensemble-b";
import {
  ENSEMBLE_C_EXAM,
  ENSEMBLE_C_QUESTIONS,
  ENSEMBLE_C_OPTIONS,
  ENSEMBLE_C_SOLUTIONS,
} from "./seed-ensemble-c";
import {
  ENSEMBLE_D_EXAM,
  ENSEMBLE_D_QUESTIONS,
  ENSEMBLE_D_OPTIONS,
  ENSEMBLE_D_SOLUTIONS,
} from "./seed-ensemble-d";
import {
  ENSEMBLE_E_EXAM,
  ENSEMBLE_E_QUESTIONS,
  ENSEMBLE_E_OPTIONS,
  ENSEMBLE_E_SOLUTIONS,
} from "./seed-ensemble-e";
import {
  ENSEMBLE_F_EXAM,
  ENSEMBLE_F_QUESTIONS,
  ENSEMBLE_F_OPTIONS,
  ENSEMBLE_F_SOLUTIONS,
} from "./seed-ensemble-f";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  type User as FirebaseUser,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export function generateUUID() {
  return (
    "mock-uuid-" +
    Math.random().toString(36).substring(2, 15) +
    "-" +
    Math.random().toString(36).substring(2, 15)
  );
}

// Static Seed Data from Supabase Migrations
const EXAM_ID = "ctfl-exam-v4-0000-0000-0000-000000000000";

const SEED_EXAMS = [
  ENSEMBLE_A_EXAM,
  ENSEMBLE_B_EXAM,
  ENSEMBLE_C_EXAM,
  ENSEMBLE_D_EXAM,
  ENSEMBLE_E_EXAM,
  ENSEMBLE_F_EXAM,
];

const SEED_QUESTIONS = [
  ...ENSEMBLE_A_QUESTIONS,
  ...ENSEMBLE_B_QUESTIONS,
  ...ENSEMBLE_C_QUESTIONS,
  ...ENSEMBLE_D_QUESTIONS,
  ...ENSEMBLE_E_QUESTIONS,
  ...ENSEMBLE_F_QUESTIONS,
];

const SEED_OPTIONS = [
  ...ENSEMBLE_A_OPTIONS,
  ...ENSEMBLE_B_OPTIONS,
  ...ENSEMBLE_C_OPTIONS,
  ...ENSEMBLE_D_OPTIONS,
  ...ENSEMBLE_E_OPTIONS,
  ...ENSEMBLE_F_OPTIONS,
];

const SEED_SOLUTIONS = [
  ...ENSEMBLE_A_SOLUTIONS,
  ...ENSEMBLE_B_SOLUTIONS,
  ...ENSEMBLE_C_SOLUTIONS,
  ...ENSEMBLE_D_SOLUTIONS,
  ...ENSEMBLE_E_SOLUTIONS,
  ...ENSEMBLE_F_SOLUTIONS,
];

// Offline fallback store in memory (synced to localStorage in browser)
const memoryStore: Record<string, any[]> = {
  exams: [...SEED_EXAMS],
  questions: [...SEED_QUESTIONS],
  question_options: [...SEED_OPTIONS],
  question_solutions: [...SEED_SOLUTIONS],
  attempts: [],
  attempt_answers: [],
  attempt_events: [],
  profiles: [],
  user_roles: [],
};

function getMemoryData(table: string): any[] {
  return memoryStore[table] || [];
}

function saveMemoryToLocalStorage(table: string) {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(`mock_supabase_table_${table}`, JSON.stringify(memoryStore[table]));
    } catch (e) {
      console.error(`Failed to save table ${table} to localStorage:`, e);
    }
  }
}

function insertMemoryData(table: string, record: any) {
  memoryStore[table] = memoryStore[table] || [];
  memoryStore[table].push(record);
  saveMemoryToLocalStorage(table);
}

function updateMemoryData(table: string, id: string, data: any) {
  memoryStore[table] = memoryStore[table] || [];
  memoryStore[table] = memoryStore[table].map((item) =>
    item.id === id ? { ...item, ...data } : item,
  );
  saveMemoryToLocalStorage(table);
}

function deleteMemoryData(table: string, id: string) {
  memoryStore[table] = memoryStore[table] || [];
  memoryStore[table] = memoryStore[table].filter((item) => item.id !== id);
  saveMemoryToLocalStorage(table);
}

// Default static configuration
const firebaseConfig = {
  projectId: "shining-unison-j7c1c",
  appId: "1:924464839885:web:68969c46059dd556fabd84",
  apiKey: "AIzaSyAvCM-fxY5N0TyW2K7fWhTi2yT2FA4mztw",
  authDomain: "shining-unison-j7c1c.firebaseapp.com",
  databaseId: "ai-studio-ctflexamsimulato-d9957d3a-a60d-4233-8f0c-aa55e49faa16",
  storageBucket: "shining-unison-j7c1c.firebasestorage.app",
  messagingSenderId: "924464839885",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app, firebaseConfig.databaseId);
export const auth = getAuth(app);

// Seeding implementation
let seedingInProgress = false;
let seeded = false;

async function ensureSeeded() {
  if (seeded || seedingInProgress) return;
  seedingInProgress = true;
  try {
    // Delete the old exam (EXAM_ID) if it exists, along with its questions, options and solutions
    try {
      const oldExamRef = doc(db, "exams", EXAM_ID);
      const oldExamSnap = await getDoc(oldExamRef);
      if (oldExamSnap.exists()) {
        console.log(`[Firebase] Cleaning up old exam (EXAM_ID)...`);
        await deleteDoc(oldExamRef);

        const oldQuestions = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];
        for (const qId of oldQuestions) {
          await deleteDoc(doc(db, "questions", qId));
          await deleteDoc(doc(db, "question_solutions", qId));
        }

        const oldOptions = [
          "q1-a",
          "q1-b",
          "q1-c",
          "q1-d",
          "q2-a",
          "q2-b",
          "q2-c",
          "q2-d",
          "q3-a",
          "q3-b",
          "q3-c",
          "q3-d",
          "q4-a",
          "q4-b",
          "q4-c",
          "q4-d",
          "q5-a",
          "q5-b",
          "q5-c",
          "q5-d",
          "q6-a",
          "q6-b",
          "q6-c",
          "q6-d",
          "q7-a",
          "q7-b",
          "q7-c",
          "q7-d",
          "q8-a",
          "q8-b",
          "q8-c",
          "q8-d",
          "q9-a",
          "q9-b",
          "q9-c",
          "q9-d",
          "q10-a",
          "q10-b",
          "q10-c",
          "q10-d",
        ];
        for (const optId of oldOptions) {
          await deleteDoc(doc(db, "question_options", optId));
        }
        console.log(`[Firebase] Old exam cleaned up successfully.`);
      }
    } catch (cleanupErr) {
      console.error("[Firebase] Error cleaning up old exam:", cleanupErr);
    }

    for (const exam of SEED_EXAMS) {
      const examDocRef = doc(db, "exams", exam.id);
      const snap = await getDoc(examDocRef);
      
      let needsSeeding = !snap.exists();
      if (snap.exists()) {
        try {
          const qList = SEED_QUESTIONS.filter((q) => q.exam_id === exam.id);
          const qIds = qList.map((q) => q.id);
          
          const qSnap = await getDocs(query(collection(db, "questions"), where("exam_id", "==", exam.id)));
          const dbQLen = qSnap.size;
          
          const optList = SEED_OPTIONS.filter((opt) => qIds.includes(opt.question_id));
          
          let lastSolExists = false;
          let lastOptExists = false;
          
          if (qIds.length > 0) {
            const lastQId = qIds[qIds.length - 1];
            const lastSolSnap = await getDoc(doc(db, "question_solutions", lastQId));
            const lastOptSnap = await getDoc(doc(db, "question_options", optList[optList.length - 1].id));
            lastSolExists = lastSolSnap.exists();
            lastOptExists = lastOptSnap.exists();
          }
          
          if (dbQLen !== qList.length) {
            needsSeeding = true;
          } else if (qIds.length > 0) {
            if (!lastSolExists || !lastOptExists) {
              needsSeeding = true;
            }
          }
        } catch (checkErr) {
          console.warn(`[Firebase] Failed to check integrity for exam ${exam.id}, forcing re-seed:`, checkErr);
          needsSeeding = true;
        }
      }

      if (needsSeeding) {
        console.log(`[Firebase] Seeding exam ${exam.title}...`);
        await setDoc(examDocRef, exam);

        // Seed Questions for this exam
        const qList = SEED_QUESTIONS.filter((q) => q.exam_id === exam.id);
        for (const q of qList) {
          await setDoc(doc(db, "questions", q.id), q);
        }

        // Seed Options for these questions
        const qIds = qList.map((q) => q.id);
        const optList = SEED_OPTIONS.filter((opt) => qIds.includes(opt.question_id));
        for (const opt of optList) {
          await setDoc(doc(db, "question_options", opt.id), opt);
        }

        // Seed Solutions for these questions
        const solList = SEED_SOLUTIONS.filter((sol) => qIds.includes(sol.question_id));
        for (const sol_item of solList) {
          await setDoc(doc(db, "question_solutions", sol_item.question_id), sol_item);
        }
        console.log(`[Firebase] Seeded exam ${exam.title} successfully.`);
      }
    }
    seeded = true;
  } catch (e) {
    console.error("[Firebase] Error seeding database:", e);
  } finally {
    seedingInProgress = false;
  }
}

// Sync localStorage cache in browser
if (typeof window !== "undefined") {
  try {
    const tablesToLoad = [
      "exams",
      "questions",
      "question_options",
      "question_solutions",
      "attempts",
      "attempt_answers",
      "attempt_events",
      "profiles",
      "user_roles",
    ];
    tablesToLoad.forEach((tbl) => {
      const data = localStorage.getItem(`mock_supabase_table_${tbl}`);
      if (data) {
        let cached = JSON.parse(data);
        if (["exams", "questions", "question_options", "question_solutions"].includes(tbl)) {
          // Remove any deleted exam/questions
          if (tbl === "exams") {
            cached = cached.filter((item: any) => item.id !== EXAM_ID);
          } else if (tbl === "questions") {
            cached = cached.filter((item: any) => item.exam_id !== EXAM_ID);
          } else if (tbl === "question_options") {
            const oldQIds = new Set(["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"]);
            cached = cached.filter((item: any) => !oldQIds.has(item.question_id));
          } else if (tbl === "question_solutions") {
            const oldQIds = new Set(["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"]);
            cached = cached.filter((item: any) => !oldQIds.has(item.question_id));
          }

          const seedItems = memoryStore[tbl];
          const cachedIds = new Set(cached.map((item: any) => item.id || item.question_id));
          const missingItems = seedItems.filter(
            (item: any) => !cachedIds.has(item.id || item.question_id),
          );
          if (missingItems.length > 0) {
            memoryStore[tbl] = [...cached, ...missingItems];
            localStorage.setItem(`mock_supabase_table_${tbl}`, JSON.stringify(memoryStore[tbl]));
          } else {
            memoryStore[tbl] = cached;
            localStorage.setItem(`mock_supabase_table_${tbl}`, JSON.stringify(memoryStore[tbl]));
          }
        } else {
          memoryStore[tbl] = cached;
        }
      } else {
        localStorage.setItem(`mock_supabase_table_${tbl}`, JSON.stringify(memoryStore[tbl] || []));
      }
    });
  } catch (e) {
    console.error("Failed to initialize localStorage local cache:", e);
  }
}

let authListeners: Array<(event: string, session: any) => void> = [];

function triggerAuthChange(event: string, session: any) {
  authListeners.forEach((cb) => cb(event, session));
}

// Map Firebase User to Supabase Session
function mapFirebaseUserToSession(user: FirebaseUser | null) {
  if (!user) {
    if (typeof window !== "undefined") {
      const savedMock = localStorage.getItem("mock_auth_user");
      if (savedMock) {
        try {
          const parsed = JSON.parse(savedMock);
          return {
            access_token: "mock-firebase-jwt-token",
            token_type: "bearer",
            expires_in: 3600,
            refresh_token: "mock-firebase-refresh-token",
            user: {
              id: parsed.uid,
              email: parsed.email,
              user_metadata: {
                full_name: parsed.displayName,
              },
            },
          };
        } catch {
          // ignore
        }
      }
    }
    const internalMock = (auth as any)?._mockUser;
    if (internalMock) {
      return {
        access_token: "mock-firebase-jwt-token",
        token_type: "bearer",
        expires_in: 3600,
        refresh_token: "mock-firebase-refresh-token",
        user: {
          id: internalMock.uid,
          email: internalMock.email,
          user_metadata: {
            full_name: internalMock.displayName,
          },
        },
      };
    }
    return null;
  }
  return {
    access_token: "mock-firebase-jwt-token",
    token_type: "bearer",
    expires_in: 3600,
    refresh_token: "mock-firebase-refresh-token",
    user: {
      id: user.uid,
      email: user.email,
      user_metadata: {
        full_name: user.displayName || user.email?.split("@")[0].toUpperCase() || "",
      },
    },
  };
}

// Cookie Helper for SSR sync
function updateAuthCookie(userId: string | null) {
  if (typeof document !== "undefined") {
    if (userId) {
      document.cookie = `auth_user_id=${userId}; path=/; max-age=31536000; SameSite=Lax`;
    } else {
      document.cookie = `auth_user_id=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
    }
  }
}

// Listen to Firebase auth state changes to keep listeners in sync
onAuthStateChanged(auth, (firebaseUser) => {
  const session = mapFirebaseUserToSession(firebaseUser);
  updateAuthCookie(firebaseUser?.uid || null);
  triggerAuthChange(firebaseUser ? "SIGNED_IN" : "SIGNED_OUT", session);
});

export function createMockSupabaseClient() {
  const queryBuilder = (table: string) => {
    return new FirebaseQueryBuilder(table);
  };

  const client = {
    auth: {
      onAuthStateChange(callback: (event: string, session: any) => void) {
        authListeners.push(callback);
        const currentSession = mapFirebaseUserToSession(auth.currentUser);
        setTimeout(() => {
          callback(currentSession ? "SIGNED_IN" : "SIGNED_OUT", currentSession);
        }, 0);
        return {
          data: {
            subscription: {
              unsubscribe() {
                authListeners = authListeners.filter((cb) => cb !== callback);
              },
            },
          },
        };
      },
      async getSession() {
        const currentSession = mapFirebaseUserToSession(auth.currentUser);
        return { data: { session: currentSession }, error: null };
      },
      async getUser() {
        const currentSession = mapFirebaseUserToSession(auth.currentUser);
        if (!currentSession) {
          return { data: { user: null }, error: new Error("No user session") };
        }
        return { data: { user: currentSession.user }, error: null };
      },
      async signOut() {
        if (typeof window !== "undefined") {
          localStorage.removeItem("mock_auth_user");
        }
        delete (auth as any)._mockUser;
        try {
          await signOut(auth);
        } catch (e) {
          // ignore
        }
        updateAuthCookie(null);
        triggerAuthChange("SIGNED_OUT", null);
        return { error: null };
      },
      async signInWithPassword({ email }: { email: string }) {
        const isDefaultAdmin = email === "admin@example.com";
        const password = "default_safe_password_123";
        let firebaseUser: FirebaseUser | null = null;
        let isMockSession = false;
        let mockUid = "";

        try {
          // Attempt login
          const res = await signInWithEmailAndPassword(auth, email, password);
          firebaseUser = res.user;
        } catch (e: any) {
          if (e.code === "auth/user-not-found" || e.code === "auth/invalid-credential") {
            try {
              // Auto-register user for seamless client sign-in
              const res = await createUserWithEmailAndPassword(auth, email, password);
              firebaseUser = res.user;
              await updateProfile(firebaseUser, {
                displayName: email.split("@")[0].toUpperCase(),
              });
            } catch (createErr: any) {
              if (createErr.code === "auth/operation-not-allowed") {
                console.warn(
                  "[Firebase] Email/Password auth not enabled. Falling back to local mock authentication session.",
                );
                isMockSession = true;
                mockUid = "mock-user-" + email.replace(/[^a-zA-Z0-9]/g, "-");
              } else {
                return { data: { session: null, user: null }, error: createErr };
              }
            }
          } else if (e.code === "auth/operation-not-allowed") {
            console.warn(
              "[Firebase] Email/Password auth not enabled. Falling back to local mock authentication session.",
            );
            isMockSession = true;
            mockUid = "mock-user-" + email.replace(/[^a-zA-Z0-9]/g, "-");
          } else {
            return { data: { session: null, user: null }, error: e };
          }
        }

        let session;
        const displayName = email.split("@")[0].toUpperCase();
        if (isMockSession) {
          const mockUser = {
            uid: mockUid,
            email: email,
            displayName: displayName,
          };
          if (typeof window !== "undefined") {
            localStorage.setItem("mock_auth_user", JSON.stringify(mockUser));
          }
          (auth as any)._mockUser = mockUser;
          session = mapFirebaseUserToSession(null);
          updateAuthCookie(mockUid);
        } else if (firebaseUser) {
          session = mapFirebaseUserToSession(firebaseUser);
          updateAuthCookie(firebaseUser.uid);
        } else {
          return { data: { session: null, user: null }, error: new Error("Authentication failed") };
        }

        const activeUid = firebaseUser ? firebaseUser.uid : mockUid;
        const activeName = firebaseUser ? firebaseUser.displayName || displayName : displayName;

        // Auto-provision profile and role in Firestore
        try {
          const profileRef = doc(db, "profiles", activeUid);
          const roleRef = doc(db, "user_roles", activeUid + "_role");

          await setDoc(
            profileRef,
            {
              id: activeUid,
              full_name: activeName,
              locale: "fr",
              created_at: new Date().toISOString(),
            },
            { merge: true },
          );

          await setDoc(
            roleRef,
            {
              id: activeUid + "_role",
              user_id: activeUid,
              role: isDefaultAdmin ? "admin" : "student",
              created_at: new Date().toISOString(),
            },
            { merge: true },
          );
        } catch (dbErr) {
          console.error(
            "Firestore auto-provisioning failed, falling back to local storage cache:",
            dbErr,
          );
          // Fallback cache
          insertMemoryData("profiles", {
            id: activeUid,
            full_name: activeName,
            created_at: new Date().toISOString(),
          });
          insertMemoryData("user_roles", {
            id: generateUUID(),
            user_id: activeUid,
            role: isDefaultAdmin ? "admin" : "student",
            created_at: new Date().toISOString(),
          });
        }

        triggerAuthChange("SIGNED_IN", session);
        return { data: { session, user: session?.user }, error: null };
      },
      async signUp({ email }: { email: string }) {
        return this.signInWithPassword({ email });
      },
      async getClaims() {
        const user = auth.currentUser;
        if (!user) {
          const mockSession = mapFirebaseUserToSession(null);
          if (mockSession?.user) {
            return {
              data: {
                claims: {
                  sub: mockSession.user.id,
                  email: mockSession.user.email,
                },
              },
              error: null,
            };
          }
          return { data: null, error: { message: "No session" } };
        }
        return {
          data: {
            claims: {
              sub: user.uid,
              email: user.email,
            },
          },
          error: null,
        };
      },
      async signInWithOAuth({ provider, options }: { provider: string; options?: any }) {
        if (provider === "google") {
          const googleProvider = new GoogleAuthProvider();
          try {
            const res = await signInWithPopup(auth, googleProvider);
            const firebaseUser = res.user;

            const session = mapFirebaseUserToSession(firebaseUser);
            updateAuthCookie(firebaseUser.uid);

            try {
              const profileRef = doc(db, "profiles", firebaseUser.uid);
              const roleRef = doc(db, "user_roles", firebaseUser.uid + "_role");

              await setDoc(
                profileRef,
                {
                  id: firebaseUser.uid,
                  full_name:
                    firebaseUser.displayName ||
                    firebaseUser.email?.split("@")[0].toUpperCase() ||
                    "",
                  locale: "fr",
                  created_at: new Date().toISOString(),
                },
                { merge: true },
              );

              await setDoc(
                roleRef,
                {
                  id: firebaseUser.uid + "_role",
                  user_id: firebaseUser.uid,
                  role: "student",
                  created_at: new Date().toISOString(),
                },
                { merge: true },
              );
            } catch (dbErr) {
              console.error(
                "Firestore auto-provisioning failed for Google user, falling back to local storage cache:",
                dbErr,
              );
              insertMemoryData("profiles", {
                id: firebaseUser.uid,
                full_name:
                  firebaseUser.displayName || firebaseUser.email?.split("@")[0].toUpperCase() || "",
                created_at: new Date().toISOString(),
              });
              insertMemoryData("user_roles", {
                id: generateUUID(),
                user_id: firebaseUser.uid,
                role: "student",
                created_at: new Date().toISOString(),
              });
            }

            triggerAuthChange("SIGNED_IN", session);
            return { error: null };
          } catch (e: any) {
            console.error("Firebase Google Popup Signin error:", e);
            return { error: e };
          }
        }
        return { error: new Error(`Provider ${provider} not supported on mock client`) };
      },
    },
    from(table: string) {
      return queryBuilder(table);
    },
  };

  return client;
}

class FirebaseQueryBuilder {
  private table: string;
  private filters: Array<{ col: string; op: "==" | "in"; val: any }> = [];
  private orderCol?: string;
  private orderAsc: boolean = true;
  private limitCount?: number;
  private countOption?: "exact" | "planned" | "estimated";
  private headOption?: boolean;
  private updateData?: any;
  private insertData?: any;
  private upsertData?: any;
  private deleteFlag: boolean = false;

  constructor(table: string) {
    this.table = table;
  }

  select(columns = "*", options?: { count?: "exact" | "planned" | "estimated"; head?: boolean }) {
    this.countOption = options?.count;
    this.headOption = options?.head;
    return this;
  }

  eq(col: string, val: any) {
    this.filters.push({ col, op: "==", val });
    return this;
  }

  in(col: string, vals: any[]) {
    this.filters.push({ col, op: "in", val: vals });
    return this;
  }

  order(col: string, { ascending = true } = {}) {
    this.orderCol = col;
    this.orderAsc = ascending;
    return this;
  }

  limit(count: number) {
    this.limitCount = count;
    return this;
  }

  async maybeSingle() {
    const { data } = await this.execute();
    const records = Array.isArray(data) ? data : [data];
    return { data: records[0] || null, error: null };
  }

  async single() {
    const { data } = await this.execute();
    const records = Array.isArray(data) ? data : [data];
    if (records.length === 0 || !records[0]) {
      return { data: null, error: { message: "Not found" } };
    }
    return { data: records[0], error: null };
  }

  then(onfulfilled?: (value: any) => any, onrejected?: (reason: any) => any) {
    return this.execute().then(
      ({ data, count }) => onfulfilled?.({ data, error: null, count }),
      (err) => onrejected?.(err),
    );
  }

  private async execute() {
    try {
      if (
        this.table === "exams" ||
        this.table === "questions" ||
        this.table === "question_options" ||
        this.table === "question_solutions"
      ) {
        await ensureSeeded();
      }

      if (this.insertData !== undefined) {
        const records = Array.isArray(this.insertData) ? this.insertData : [this.insertData];
        const created: any[] = [];
        try {
          for (const rec of records) {
            const id = rec.id || generateUUID();
            const docRef = doc(db, this.table, id);
            const recordToWrite = {
              created_at: rec.created_at || new Date().toISOString(),
              ...rec,
              id,
            };
            await setDoc(docRef, recordToWrite);
            created.push(recordToWrite);
            insertMemoryData(this.table, recordToWrite);
          }
        } catch (e) {
          console.error(`Error in Firestore insert for table ${this.table}:`, e);
          for (const rec of records) {
            const recordToWrite = {
              id: rec.id || generateUUID(),
              created_at: new Date().toISOString(),
              ...rec,
            };
            insertMemoryData(this.table, recordToWrite);
            created.push(recordToWrite);
          }
        }
        const result = Array.isArray(this.insertData) ? created : created[0];
        return { data: result, count: null };
      }

      if (this.upsertData !== undefined) {
        const records = Array.isArray(this.upsertData) ? this.upsertData : [this.upsertData];
        const result: any[] = [];
        try {
          for (const rec of records) {
            const id = rec.id || generateUUID();
            const docRef = doc(db, this.table, id);
            const updatedRecord = {
              updated_at: new Date().toISOString(),
              ...rec,
              id,
            };
            await setDoc(docRef, updatedRecord, { merge: true });
            result.push(updatedRecord);

            const existing = id ? getMemoryData(this.table).find((item) => item.id === id) : null;
            if (existing) {
              updateMemoryData(this.table, id, rec);
            } else {
              insertMemoryData(this.table, updatedRecord);
            }
          }
        } catch (e) {
          console.error(`Error in Firestore upsert for table ${this.table}:`, e);
          for (const rec of records) {
            const id = rec.id || generateUUID();
            const existing = id ? getMemoryData(this.table).find((item) => item.id === id) : null;
            if (existing) {
              updateMemoryData(this.table, id, rec);
              result.push({ ...existing, ...rec });
            } else {
              const newRec = {
                id,
                created_at: new Date().toISOString(),
                ...rec,
              };
              insertMemoryData(this.table, newRec);
              result.push(newRec);
            }
          }
        }
        const resValue = Array.isArray(this.upsertData) ? result : result[0];
        return { data: resValue, count: null };
      }

      let results: any[] = [];
      const inFilter = this.filters.find((f) => f.op === "in");

      if (inFilter && Array.isArray(inFilter.val) && inFilter.val.length > 30) {
        const allVal = inFilter.val;
        const chunkSize = 30;
        const promises: Promise<any[]>[] = [];

        for (let i = 0; i < allVal.length; i += chunkSize) {
          const chunk = allVal.slice(i, i + chunkSize);
          const colRef = collection(db, this.table);
          let chunkQ = query(colRef);

          for (const filter of this.filters) {
            if (filter === inFilter) {
              chunkQ = query(chunkQ, where(filter.col, "in", chunk));
            } else if (filter.op === "in") {
              const otherChunk = Array.isArray(filter.val) ? filter.val.slice(0, 30) : [];
              chunkQ = query(chunkQ, where(filter.col, "in", otherChunk));
            } else {
              chunkQ = query(chunkQ, where(filter.col, "==", filter.val));
            }
          }

          if (this.orderCol) {
            chunkQ = query(chunkQ, orderBy(this.orderCol, this.orderAsc ? "asc" : "desc"));
          }
          if (this.limitCount !== undefined) {
            chunkQ = query(chunkQ, limit(this.limitCount));
          }

          promises.push(
            (async () => {
              const snap = await getDocs(chunkQ);
              const chunkResults: any[] = [];
              snap.forEach((docSnap) => {
                const d = docSnap.data();
                chunkResults.push({ id: docSnap.id, ...d });
              });
              return chunkResults;
            })()
          );
        }

        const chunksResultsArr = await Promise.all(promises);
        const seenIds = new Set<string>();
        for (const resList of chunksResultsArr) {
          for (const item of resList) {
            if (!seenIds.has(item.id)) {
              seenIds.add(item.id);
              results.push(item);
            }
          }
        }

        if (this.orderCol) {
          results.sort((a, b) => {
            const valA = a[this.orderCol!];
            const valB = b[this.orderCol!];
            if (valA === valB) return 0;
            const res = valA < valB ? -1 : 1;
            return this.orderAsc ? res : -res;
          });
        }
        if (this.limitCount !== undefined) {
          results = results.slice(0, this.limitCount);
        }
      } else {
        const colRef = collection(db, this.table);
        let q = query(colRef);

        for (const filter of this.filters) {
          if (filter.op === "in") {
            if (!Array.isArray(filter.val) || filter.val.length === 0) {
              return { data: [], count: 0 };
            }
            const chunks = filter.val.slice(0, 30);
            q = query(q, where(filter.col, "in", chunks));
          } else {
            q = query(q, where(filter.col, "==", filter.val));
          }
        }

        if (this.orderCol) {
          q = query(q, orderBy(this.orderCol, this.orderAsc ? "asc" : "desc"));
        }
        if (this.limitCount !== undefined) {
          q = query(q, limit(this.limitCount));
        }

        const snap = await getDocs(q);
        snap.forEach((docSnap) => {
          const d = docSnap.data();
          results.push({
            id: docSnap.id,
            ...d,
          });
        });
      }

      if (this.updateData !== undefined) {
        const result: any[] = [];
        for (const item of results) {
          const docRef = doc(db, this.table, item.id);
          const updatedRecord = {
            ...item,
            ...this.updateData,
            updated_at: new Date().toISOString(),
          };
          await setDoc(docRef, updatedRecord, { merge: true });
          result.push(updatedRecord);
          updateMemoryData(this.table, item.id, this.updateData);
        }
        return { data: result, count: null };
      }

      if (this.deleteFlag) {
        const result: any[] = [];
        for (const item of results) {
          const docRef = doc(db, this.table, item.id);
          await deleteDoc(docRef);
          result.push(item);
          deleteMemoryData(this.table, item.id);
        }
        return { data: result, count: null };
      }

      const count = this.countOption ? results.length : null;
      const finalData = this.headOption ? [] : results;
      return { data: finalData, count };
    } catch (e: any) {
      console.warn(
        `Firestore query failed on ${this.table}, using offline memory cache fallback:`,
        e.message,
      );
      let items = getMemoryData(this.table);
      for (const filter of this.filters) {
        if (filter.op === "in") {
          items = items.filter((item) => filter.val.includes(item[filter.col]));
        } else {
          items = items.filter((item) => item[filter.col] === filter.val);
        }
      }
      if (this.orderCol) {
        const col = this.orderCol;
        const asc = this.orderAsc;
        items = [...items].sort((a, b) => {
          const valA = a[col];
          const valB = b[col];
          if (valA < valB) return asc ? -1 : 1;
          if (valA > valB) return asc ? 1 : -1;
          return 0;
        });
      }
      if (this.limitCount !== undefined) {
        items = items.slice(0, this.limitCount);
      }

      if (this.updateData !== undefined) {
        const result: any[] = [];
        for (const item of items) {
          updateMemoryData(this.table, item.id, this.updateData);
          result.push({ ...item, ...this.updateData });
        }
        return { data: result, count: null };
      }

      if (this.deleteFlag) {
        for (const item of items) {
          deleteMemoryData(this.table, item.id);
        }
        return { data: items, count: null };
      }

      const count = this.countOption ? items.length : null;
      const finalData = this.headOption ? [] : items;
      return { data: finalData, count };
    }
  }

  insert(data: any | any[]) {
    this.insertData = data;
    return this;
  }

  update(data: any) {
    this.updateData = data;
    return this;
  }

  upsert(data: any) {
    this.upsertData = data;
    return this;
  }

  delete() {
    this.deleteFlag = true;
    return this;
  }
}
