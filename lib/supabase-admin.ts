import { createClient } from "@supabase/supabase-js";


// Load environment variables first


// Get environment variables after they're loaded
const supabaseUrl = "https://olkmhbkfzuzqvzsayluu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sa21oYmtmenV6cXZ6c2F5bHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNDU2ODksImV4cCI6MjA4NTYyMTY4OX0.uFA55B2kARgL7Tk1actLkht8m4mx3HZaQej2DdtUHqo";

if (!supabaseUrl) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_URL");
}
if (!supabaseAnonKey) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});