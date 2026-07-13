
CREATE TYPE public.app_role AS ENUM ('admin', 'student');
CREATE TYPE public.exam_status AS ENUM ('draft', 'published');
CREATE TYPE public.question_type AS ENUM ('single', 'multi');
CREATE TYPE public.k_level AS ENUM ('K1', 'K2', 'K3');
CREATE TYPE public.attempt_status AS ENUM ('in_progress', 'submitted', 'expired');
CREATE TYPE public.exam_doc_kind AS ENUM ('questions', 'answers');
CREATE TYPE public.asset_kind AS ENUM ('image', 'table');

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TABLE public.profiles (
  id UUID NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL DEFAULT '',
  locale TEXT NOT NULL DEFAULT 'fr',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_profiles_updated BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.user_roles (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT, INSERT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE TABLE public.exams (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  language TEXT NOT NULL DEFAULT 'fr',
  duration_minutes INTEGER NOT NULL DEFAULT 60,
  total_questions INTEGER NOT NULL DEFAULT 40,
  passing_threshold INTEGER NOT NULL DEFAULT 65,
  points_per_question INTEGER NOT NULL DEFAULT 1,
  attempts_allowed INTEGER,
  status public.exam_status NOT NULL DEFAULT 'draft',
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.exams TO authenticated;
GRANT ALL ON public.exams TO service_role;
ALTER TABLE public.exams ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_exams_updated BEFORE UPDATE ON public.exams
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE FUNCTION public.is_exam_published(_exam_id UUID)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.exams WHERE id = _exam_id AND status = 'published')
$$;

CREATE TABLE public.exam_documents (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  exam_id UUID NOT NULL REFERENCES public.exams(id) ON DELETE CASCADE,
  kind public.exam_doc_kind NOT NULL,
  storage_path TEXT NOT NULL,
  page_count INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.exam_documents TO authenticated;
GRANT ALL ON public.exam_documents TO service_role;
ALTER TABLE public.exam_documents ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.questions (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  exam_id UUID NOT NULL REFERENCES public.exams(id) ON DELETE CASCADE,
  position INTEGER NOT NULL DEFAULT 0,
  text TEXT NOT NULL,
  type public.question_type NOT NULL DEFAULT 'single',
  points INTEGER NOT NULL DEFAULT 1,
  k_level public.k_level NOT NULL DEFAULT 'K1',
  chapter INTEGER NOT NULL DEFAULT 1,
  learning_objective TEXT NOT NULL DEFAULT '',
  source_page INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.questions TO authenticated;
GRANT ALL ON public.questions TO service_role;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_questions_updated BEFORE UPDATE ON public.questions
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.question_options (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  position INTEGER NOT NULL DEFAULT 0,
  label TEXT NOT NULL DEFAULT '',
  text TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.question_options TO authenticated;
GRANT ALL ON public.question_options TO service_role;
ALTER TABLE public.question_options ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.question_assets (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  kind public.asset_kind NOT NULL DEFAULT 'image',
  storage_path TEXT NOT NULL,
  caption TEXT NOT NULL DEFAULT '',
  position INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.question_assets TO authenticated;
GRANT ALL ON public.question_assets TO service_role;
ALTER TABLE public.question_assets ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.question_solutions (
  question_id UUID NOT NULL PRIMARY KEY REFERENCES public.questions(id) ON DELETE CASCADE,
  correct_option_ids UUID[] NOT NULL DEFAULT '{}',
  explanation TEXT NOT NULL DEFAULT '',
  option_rationales JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.question_solutions TO authenticated;
GRANT ALL ON public.question_solutions TO service_role;
ALTER TABLE public.question_solutions ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_solutions_updated BEFORE UPDATE ON public.question_solutions
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.attempts (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  exam_id UUID NOT NULL REFERENCES public.exams(id) ON DELETE CASCADE,
  status public.attempt_status NOT NULL DEFAULT 'in_progress',
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL,
  submitted_at TIMESTAMPTZ,
  score INTEGER,
  max_score INTEGER,
  percentage NUMERIC(5,2),
  passed BOOLEAN,
  time_used_seconds INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.attempts TO authenticated;
GRANT ALL ON public.attempts TO service_role;
ALTER TABLE public.attempts ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.attempt_answers (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  attempt_id UUID NOT NULL REFERENCES public.attempts(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  selected_option_ids UUID[] NOT NULL DEFAULT '{}',
  marked_for_review BOOLEAN NOT NULL DEFAULT false,
  is_correct BOOLEAN,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (attempt_id, question_id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.attempt_answers TO authenticated;
GRANT ALL ON public.attempt_answers TO service_role;
ALTER TABLE public.attempt_answers ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_answers_updated BEFORE UPDATE ON public.attempt_answers
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.attempt_events (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  attempt_id UUID NOT NULL REFERENCES public.attempts(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  payload JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.attempt_events TO authenticated;
GRANT ALL ON public.attempt_events TO service_role;
ALTER TABLE public.attempt_events ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.bookmarks (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, question_id)
);
GRANT SELECT, INSERT, DELETE ON public.bookmarks TO authenticated;
GRANT ALL ON public.bookmarks TO service_role;
ALTER TABLE public.bookmarks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profiles_select_own" ON public.profiles FOR SELECT TO authenticated
  USING (auth.uid() = id OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "profiles_insert_own" ON public.profiles FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles_update_own" ON public.profiles FOR UPDATE TO authenticated
  USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE POLICY "user_roles_select_own" ON public.user_roles FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "user_roles_insert_self_student" ON public.user_roles FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id AND role = 'student');

CREATE POLICY "exams_select" ON public.exams FOR SELECT TO authenticated
  USING (status = 'published' OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "exams_admin_write" ON public.exams FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "exam_documents_admin" ON public.exam_documents FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "questions_select" ON public.questions FOR SELECT TO authenticated
  USING (public.is_exam_published(exam_id) OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "questions_admin_write" ON public.questions FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "question_options_select" ON public.question_options FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR EXISTS (
    SELECT 1 FROM public.questions q WHERE q.id = question_id AND public.is_exam_published(q.exam_id)));
CREATE POLICY "question_options_admin_write" ON public.question_options FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "question_assets_select" ON public.question_assets FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR EXISTS (
    SELECT 1 FROM public.questions q WHERE q.id = question_id AND public.is_exam_published(q.exam_id)));
CREATE POLICY "question_assets_admin_write" ON public.question_assets FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "question_solutions_admin" ON public.question_solutions FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "attempts_select_own" ON public.attempts FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "attempts_insert_own" ON public.attempts FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY "attempts_update_own" ON public.attempts FOR UPDATE TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "attempt_answers_select" ON public.attempt_answers FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR EXISTS (
    SELECT 1 FROM public.attempts a WHERE a.id = attempt_id AND a.user_id = auth.uid()));
CREATE POLICY "attempt_answers_write" ON public.attempt_answers FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.attempts a WHERE a.id = attempt_id AND a.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.attempts a WHERE a.id = attempt_id AND a.user_id = auth.uid()));

CREATE POLICY "attempt_events_select" ON public.attempt_events FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR EXISTS (
    SELECT 1 FROM public.attempts a WHERE a.id = attempt_id AND a.user_id = auth.uid()));
CREATE POLICY "attempt_events_insert" ON public.attempt_events FOR INSERT TO authenticated
  WITH CHECK (EXISTS (SELECT 1 FROM public.attempts a WHERE a.id = attempt_id AND a.user_id = auth.uid()));

CREATE POLICY "bookmarks_all_own" ON public.bookmarks FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE INDEX idx_questions_exam ON public.questions(exam_id);
CREATE INDEX idx_options_question ON public.question_options(question_id);
CREATE INDEX idx_assets_question ON public.question_assets(question_id);
CREATE INDEX idx_attempts_user ON public.attempts(user_id);
CREATE INDEX idx_attempts_exam ON public.attempts(exam_id);
CREATE INDEX idx_answers_attempt ON public.attempt_answers(attempt_id);
CREATE INDEX idx_events_attempt ON public.attempt_events(attempt_id);
CREATE INDEX idx_bookmarks_user ON public.bookmarks(user_id);
