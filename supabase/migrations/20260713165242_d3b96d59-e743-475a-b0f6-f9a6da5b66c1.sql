-- exam-documents: admin-only for everything (private, students never access)
CREATE POLICY "exam_documents_admin_all" ON storage.objects
  FOR ALL TO authenticated
  USING (bucket_id = 'exam-documents' AND public.has_role(auth.uid(), 'admin'))
  WITH CHECK (bucket_id = 'exam-documents' AND public.has_role(auth.uid(), 'admin'));

-- question-assets: admins manage; all authenticated users may read (images shown in exams)
CREATE POLICY "question_assets_admin_write" ON storage.objects
  FOR ALL TO authenticated
  USING (bucket_id = 'question-assets' AND public.has_role(auth.uid(), 'admin'))
  WITH CHECK (bucket_id = 'question-assets' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "question_assets_read" ON storage.objects
  FOR SELECT TO authenticated
  USING (bucket_id = 'question-assets');