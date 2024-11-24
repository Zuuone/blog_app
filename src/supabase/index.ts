// supabase.ts (or similar file)
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // URL of your Supabase instance
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // Your Supabase Anon Key

if (!supabaseUrl || !supabaseKey) {
  throw new Error("supabaseUrl and supabaseKey are required");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// supabase.from("profiles");
