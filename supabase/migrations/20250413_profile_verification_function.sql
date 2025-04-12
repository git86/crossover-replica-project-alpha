
-- Create a stored procedure to update verification fields
CREATE OR REPLACE FUNCTION public.update_profile_verification(
  user_id UUID,
  selfie_path TEXT,
  passport_path TEXT,
  verification_status TEXT
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.profiles
  SET 
    selfie_verification = selfie_path,
    passport_verification = passport_path,
    verification_status = verification_status
  WHERE id = user_id;
END;
$$;
