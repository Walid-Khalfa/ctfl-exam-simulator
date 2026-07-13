-- Phase 4: question editor fields + admin role grant support

ALTER TABLE public.questions
  ADD COLUMN IF NOT EXISTS answers_required integer NOT NULL DEFAULT 1,
  ADD COLUMN IF NOT EXISTS validation_status text NOT NULL DEFAULT 'draft';

ALTER TABLE public.questions
  DROP CONSTRAINT IF EXISTS questions_validation_status_check;
ALTER TABLE public.questions
  ADD CONSTRAINT questions_validation_status_check
  CHECK (validation_status IN ('draft', 'validated'));

-- Track which document/page a question was extracted from (source_page already exists;
-- add document reference for traceability of AI imports).
ALTER TABLE public.questions
  ADD COLUMN IF NOT EXISTS source_document_id uuid REFERENCES public.exam_documents(id) ON DELETE SET NULL;

-- Allow admins to grant/revoke roles (needed for the instructor to manage roles once bootstrapped).
DROP POLICY IF EXISTS user_roles_admin_write ON public.user_roles;
CREATE POLICY user_roles_admin_write ON public.user_roles
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));