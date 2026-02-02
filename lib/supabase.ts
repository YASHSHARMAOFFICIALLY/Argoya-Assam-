import { createClient } from "@supabase/supabase-js";

// Hardcoded values (for development only)
const supabaseUrl = "https://olkmhbkfzuzqvzsayluu.supabase.co";
const supabaseAnonKey =
  "sb_secret_0mtLlfTBcMhL3RLKuZohOQ_ThbJrvqD";

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: true,
    detectSessionInUrl: false,
  },
});

// Test the connection only in browser
if (typeof window !== "undefined") {
  async function testConnection() {
    try {
      console.log("Attempting to connect to Supabase...");
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("Supabase connection error:", {
          message: error.message,
          status: error.status,
          name: error.name,
        });
      } else {
        console.log("Supabase connection successful");
      }
    } catch (error) {
      console.error("Fatal Supabase connection error:", {
        error:
          error instanceof Error
            ? {
                message: error.message,
                name: error.name,
                stack: error.stack,
              }
            : error,
      });
    }
  }

  testConnection().catch(console.error);
}

export type Profile = {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  updated_at?: string;
};