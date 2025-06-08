import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oenptmvwccwctuxffdrs.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lbnB0bXZ3Y2N3Y3R1eGZmZHJzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTM1MjQ1MiwiZXhwIjoyMDY0OTI4NDUyfQ.t7gMTI_0zRyg83a8D-xL3Os29PsUzhkP_oW2DWcMvEo'; // reemplázala por la real

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
