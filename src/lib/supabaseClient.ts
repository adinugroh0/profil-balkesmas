import { createClient } from "@supabase/supabase-js";

// Ganti ini dengan URL Supabase Anda (dari dashboard Supabase)
const supabaseUrl = "https://aixcdqvecwvpjbzvbduy.supabase.co";

// Ganti ini dengan kunci anon dari dashboard Supabase Anda
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpeGNkcXZlY3d2cGpienZiZHV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyODI2MTUzNCwiZXhwIjoyMDQzODM3NTM0fQ.jAevvJKPJwJDj1g2u2k3TX_MWcSjmo0wGMBquZ5aQpg";

export const supabase = createClient(supabaseUrl, supabaseKey);
