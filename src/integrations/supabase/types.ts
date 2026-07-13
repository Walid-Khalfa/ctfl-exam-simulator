export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5";
  };
  public: {
    Tables: {
      attempt_answers: {
        Row: {
          attempt_id: string;
          id: string;
          is_correct: boolean | null;
          marked_for_review: boolean;
          question_id: string;
          selected_option_ids: string[];
          updated_at: string;
        };
        Insert: {
          attempt_id: string;
          id?: string;
          is_correct?: boolean | null;
          marked_for_review?: boolean;
          question_id: string;
          selected_option_ids?: string[];
          updated_at?: string;
        };
        Update: {
          attempt_id?: string;
          id?: string;
          is_correct?: boolean | null;
          marked_for_review?: boolean;
          question_id?: string;
          selected_option_ids?: string[];
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "attempt_answers_attempt_id_fkey";
            columns: ["attempt_id"];
            isOneToOne: false;
            referencedRelation: "attempts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "attempt_answers_question_id_fkey";
            columns: ["question_id"];
            isOneToOne: false;
            referencedRelation: "questions";
            referencedColumns: ["id"];
          },
        ];
      };
      attempt_events: {
        Row: {
          attempt_id: string;
          created_at: string;
          id: string;
          payload: Json;
          type: string;
        };
        Insert: {
          attempt_id: string;
          created_at?: string;
          id?: string;
          payload?: Json;
          type: string;
        };
        Update: {
          attempt_id?: string;
          created_at?: string;
          id?: string;
          payload?: Json;
          type?: string;
        };
        Relationships: [
          {
            foreignKeyName: "attempt_events_attempt_id_fkey";
            columns: ["attempt_id"];
            isOneToOne: false;
            referencedRelation: "attempts";
            referencedColumns: ["id"];
          },
        ];
      };
      attempts: {
        Row: {
          created_at: string;
          exam_id: string;
          expires_at: string;
          id: string;
          max_score: number | null;
          passed: boolean | null;
          percentage: number | null;
          score: number | null;
          started_at: string;
          status: Database["public"]["Enums"]["attempt_status"];
          submitted_at: string | null;
          time_used_seconds: number | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          exam_id: string;
          expires_at: string;
          id?: string;
          max_score?: number | null;
          passed?: boolean | null;
          percentage?: number | null;
          score?: number | null;
          started_at?: string;
          status?: Database["public"]["Enums"]["attempt_status"];
          submitted_at?: string | null;
          time_used_seconds?: number | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          exam_id?: string;
          expires_at?: string;
          id?: string;
          max_score?: number | null;
          passed?: boolean | null;
          percentage?: number | null;
          score?: number | null;
          started_at?: string;
          status?: Database["public"]["Enums"]["attempt_status"];
          submitted_at?: string | null;
          time_used_seconds?: number | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "attempts_exam_id_fkey";
            columns: ["exam_id"];
            isOneToOne: false;
            referencedRelation: "exams";
            referencedColumns: ["id"];
          },
        ];
      };
      audit_log: {
        Row: {
          action: string;
          actor_id: string | null;
          actor_name: string | null;
          created_at: string;
          details: Json;
          id: string;
          target_id: string | null;
          target_type: string | null;
        };
        Insert: {
          action: string;
          actor_id?: string | null;
          actor_name?: string | null;
          created_at?: string;
          details?: Json;
          id?: string;
          target_id?: string | null;
          target_type?: string | null;
        };
        Update: {
          action?: string;
          actor_id?: string | null;
          actor_name?: string | null;
          created_at?: string;
          details?: Json;
          id?: string;
          target_id?: string | null;
          target_type?: string | null;
        };
        Relationships: [];
      };
      bookmarks: {
        Row: {
          created_at: string;
          id: string;
          question_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          question_id: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          question_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "bookmarks_question_id_fkey";
            columns: ["question_id"];
            isOneToOne: false;
            referencedRelation: "questions";
            referencedColumns: ["id"];
          },
        ];
      };
      exam_documents: {
        Row: {
          created_at: string;
          exam_id: string;
          id: string;
          kind: Database["public"]["Enums"]["exam_doc_kind"];
          page_count: number | null;
          storage_path: string;
        };
        Insert: {
          created_at?: string;
          exam_id: string;
          id?: string;
          kind: Database["public"]["Enums"]["exam_doc_kind"];
          page_count?: number | null;
          storage_path: string;
        };
        Update: {
          created_at?: string;
          exam_id?: string;
          id?: string;
          kind?: Database["public"]["Enums"]["exam_doc_kind"];
          page_count?: number | null;
          storage_path?: string;
        };
        Relationships: [
          {
            foreignKeyName: "exam_documents_exam_id_fkey";
            columns: ["exam_id"];
            isOneToOne: false;
            referencedRelation: "exams";
            referencedColumns: ["id"];
          },
        ];
      };
      exams: {
        Row: {
          attempts_allowed: number | null;
          created_at: string;
          created_by: string | null;
          description: string;
          duration_minutes: number;
          id: string;
          language: string;
          passing_threshold: number;
          points_per_question: number;
          status: Database["public"]["Enums"]["exam_status"];
          title: string;
          total_questions: number;
          updated_at: string;
        };
        Insert: {
          attempts_allowed?: number | null;
          created_at?: string;
          created_by?: string | null;
          description?: string;
          duration_minutes?: number;
          id?: string;
          language?: string;
          passing_threshold?: number;
          points_per_question?: number;
          status?: Database["public"]["Enums"]["exam_status"];
          title: string;
          total_questions?: number;
          updated_at?: string;
        };
        Update: {
          attempts_allowed?: number | null;
          created_at?: string;
          created_by?: string | null;
          description?: string;
          duration_minutes?: number;
          id?: string;
          language?: string;
          passing_threshold?: number;
          points_per_question?: number;
          status?: Database["public"]["Enums"]["exam_status"];
          title?: string;
          total_questions?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          created_at: string;
          full_name: string;
          id: string;
          locale: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          full_name?: string;
          id: string;
          locale?: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          full_name?: string;
          id?: string;
          locale?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      question_assets: {
        Row: {
          caption: string;
          created_at: string;
          id: string;
          kind: Database["public"]["Enums"]["asset_kind"];
          position: number;
          question_id: string;
          storage_path: string;
        };
        Insert: {
          caption?: string;
          created_at?: string;
          id?: string;
          kind?: Database["public"]["Enums"]["asset_kind"];
          position?: number;
          question_id: string;
          storage_path: string;
        };
        Update: {
          caption?: string;
          created_at?: string;
          id?: string;
          kind?: Database["public"]["Enums"]["asset_kind"];
          position?: number;
          question_id?: string;
          storage_path?: string;
        };
        Relationships: [
          {
            foreignKeyName: "question_assets_question_id_fkey";
            columns: ["question_id"];
            isOneToOne: false;
            referencedRelation: "questions";
            referencedColumns: ["id"];
          },
        ];
      };
      question_options: {
        Row: {
          created_at: string;
          id: string;
          label: string;
          position: number;
          question_id: string;
          text: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          label?: string;
          position?: number;
          question_id: string;
          text: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          label?: string;
          position?: number;
          question_id?: string;
          text?: string;
        };
        Relationships: [
          {
            foreignKeyName: "question_options_question_id_fkey";
            columns: ["question_id"];
            isOneToOne: false;
            referencedRelation: "questions";
            referencedColumns: ["id"];
          },
        ];
      };
      question_solutions: {
        Row: {
          correct_option_ids: string[];
          created_at: string;
          explanation: string;
          option_rationales: Json;
          question_id: string;
          updated_at: string;
        };
        Insert: {
          correct_option_ids?: string[];
          created_at?: string;
          explanation?: string;
          option_rationales?: Json;
          question_id: string;
          updated_at?: string;
        };
        Update: {
          correct_option_ids?: string[];
          created_at?: string;
          explanation?: string;
          option_rationales?: Json;
          question_id?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "question_solutions_question_id_fkey";
            columns: ["question_id"];
            isOneToOne: true;
            referencedRelation: "questions";
            referencedColumns: ["id"];
          },
        ];
      };
      questions: {
        Row: {
          answers_required: number;
          chapter: number;
          created_at: string;
          exam_id: string;
          id: string;
          k_level: Database["public"]["Enums"]["k_level"];
          learning_objective: string;
          points: number;
          position: number;
          source_document_id: string | null;
          source_page: number | null;
          text: string;
          type: Database["public"]["Enums"]["question_type"];
          updated_at: string;
          validation_status: string;
        };
        Insert: {
          answers_required?: number;
          chapter?: number;
          created_at?: string;
          exam_id: string;
          id?: string;
          k_level?: Database["public"]["Enums"]["k_level"];
          learning_objective?: string;
          points?: number;
          position?: number;
          source_document_id?: string | null;
          source_page?: number | null;
          text: string;
          type?: Database["public"]["Enums"]["question_type"];
          updated_at?: string;
          validation_status?: string;
        };
        Update: {
          answers_required?: number;
          chapter?: number;
          created_at?: string;
          exam_id?: string;
          id?: string;
          k_level?: Database["public"]["Enums"]["k_level"];
          learning_objective?: string;
          points?: number;
          position?: number;
          source_document_id?: string | null;
          source_page?: number | null;
          text?: string;
          type?: Database["public"]["Enums"]["question_type"];
          updated_at?: string;
          validation_status?: string;
        };
        Relationships: [
          {
            foreignKeyName: "questions_exam_id_fkey";
            columns: ["exam_id"];
            isOneToOne: false;
            referencedRelation: "exams";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "questions_source_document_id_fkey";
            columns: ["source_document_id"];
            isOneToOne: false;
            referencedRelation: "exam_documents";
            referencedColumns: ["id"];
          },
        ];
      };
      user_roles: {
        Row: {
          created_at: string;
          id: string;
          role: Database["public"]["Enums"]["app_role"];
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          role: Database["public"]["Enums"]["app_role"];
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          role?: Database["public"]["Enums"]["app_role"];
          user_id?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"];
          _user_id: string;
        };
        Returns: boolean;
      };
      is_exam_published: { Args: { _exam_id: string }; Returns: boolean };
    };
    Enums: {
      app_role: "admin" | "student";
      asset_kind: "image" | "table";
      attempt_status: "in_progress" | "submitted" | "expired";
      exam_doc_kind: "questions" | "answers";
      exam_status: "draft" | "published" | "archived";
      k_level: "K1" | "K2" | "K3";
      question_type: "single" | "multi";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    keyof DefaultSchema["CompositeTypes"] | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "student"],
      asset_kind: ["image", "table"],
      attempt_status: ["in_progress", "submitted", "expired"],
      exam_doc_kind: ["questions", "answers"],
      exam_status: ["draft", "published", "archived"],
      k_level: ["K1", "K2", "K3"],
      question_type: ["single", "multi"],
    },
  },
} as const;
