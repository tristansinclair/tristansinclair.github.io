import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://waoitkfdrdzcsldypgzg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indhb2l0a2ZkcmR6Y3NsZHlwZ3pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI4MTc0NDAsImV4cCI6MTk4ODM5MzQ0MH0.60JJVYljHjKkpMI4ll-Ou6ja3aExMk9TZkh64fm4-ZU"
);

// export const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//   );
