import { createClient } from '@supabase/supabase-js'

// Usamos los nombres exactos de tu archivo .env, Joan
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("⚠️ Error: Las variables de Supabase no cargaron correctamente, Joan.");
}

export const supabase = createClient(
  supabaseUrl || '', 
  supabaseAnonKey || ''
)