CREATE TABLE public.guide_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  organisation text,
  role text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.guide_subscribers TO anon;
GRANT ALL ON public.guide_subscribers TO service_role;

ALTER TABLE public.guide_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to guide updates"
  ON public.guide_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);