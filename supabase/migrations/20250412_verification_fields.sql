
-- Add verification fields to profiles table
ALTER TABLE IF EXISTS public.profiles ADD COLUMN IF NOT EXISTS selfie_verification TEXT;
ALTER TABLE IF EXISTS public.profiles ADD COLUMN IF NOT EXISTS passport_verification TEXT;
ALTER TABLE IF EXISTS public.profiles ADD COLUMN IF NOT EXISTS verification_status TEXT DEFAULT 'pending';

-- Create storage bucket for verification documents if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('verifications', 'Verification Documents', false)
ON CONFLICT (id) DO NOTHING;

-- Set up security policy for verifications bucket
CREATE POLICY "Users can upload their own verification documents"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'verifications' AND (storage.foldername(name))[1] = auth.uid()::text);

CREATE POLICY "Users can view their own verification documents"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'verifications' AND (storage.foldername(name))[1] = auth.uid()::text);
