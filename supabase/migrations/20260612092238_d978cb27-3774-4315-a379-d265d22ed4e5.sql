
DROP POLICY "Anyone can submit leads" ON public.leads;

CREATE POLICY "Anyone can submit leads"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 100
    AND char_length(email) BETWEEN 3 AND 255
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(message) BETWEEN 1 AND 5000
    AND (company IS NULL OR char_length(company) <= 150)
    AND (phone IS NULL OR char_length(phone) <= 30)
    AND is_read = false
  );
