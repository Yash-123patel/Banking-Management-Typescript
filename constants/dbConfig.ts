import { createClient } from 'npm:@supabase/supabase-js'
 
const SUPABASE_URL ='https://byhrrgktyqfthqcwpiai.supabase.co';
const SUPABASE_ANON_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5aHJyZ2t0eXFmdGhxY3dwaWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyNTg5MjYsImV4cCI6MjA0NzgzNDkyNn0.fUM74NFO9bt3sV09kX77OWhs_cso4w9zqIR64yPREdc';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;