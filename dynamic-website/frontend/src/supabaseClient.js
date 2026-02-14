// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oojjvjcyqjrgtihilibg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vamp2amN5cWpyZ3RpaGlsaWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MzgwMjAsImV4cCI6MjA4NjUxNDAyMH0.8UdFFCDbqexV5Bn9BhIWpNu3VSIDAHAp9g3haTMacZ4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
