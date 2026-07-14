/* eslint-disable @typescript-eslint/no-explicit-any */
import { createMockSupabaseClient } from "./mock-client";

function createSupabaseClient() {
  return createMockSupabaseClient() as any;
}

let _supabase: ReturnType<typeof createSupabaseClient> | undefined;

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";
export const supabase = new Proxy({} as ReturnType<typeof createSupabaseClient>, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  },
});
