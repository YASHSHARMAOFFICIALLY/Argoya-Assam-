import { createClient } from "@supabase/supabase-js";

// Hardcoded values (for development only)
const supabaseUrl = "https://olkmhbkfzuzqvzsayluu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sa21oYmtmenV6cXZ6c2F5bHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNDU2ODksImV4cCI6MjA4NTYyMTY4OX0.uFA55B2kARgL7Tk1actLkht8m4mx3HZaQej2DdtUHqo";

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