-- Supabase SQL: Ejecutar en el Editor SQL de tu proyecto Supabase
-- Tabla para captura de leads / lista de espera

CREATE TABLE IF NOT EXISTS leads (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre      text,
  email       text NOT NULL UNIQUE,
  created_at  timestamptz DEFAULT now()
);

-- Habilitar Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Política: solo inserts anónimos (para el formulario público)
CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT
  WITH CHECK (true);

-- Política: solo el owner puede leer (para el dashboard de Supabase)
CREATE POLICY "Allow select for service role" ON leads
  FOR SELECT
  USING (auth.role() = 'service_role');

-- Índice para búsquedas por email
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads (email);
