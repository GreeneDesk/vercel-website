CREATE TABLE public.demo_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  org_type TEXT NOT NULL,
  current_system TEXT NOT NULL,
  locations TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.demo_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a demo lead"
  ON public.demo_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can submit a demo lead"
  ON public.demo_leads
  FOR INSERT
  TO authenticated
  WITH CHECK (true);