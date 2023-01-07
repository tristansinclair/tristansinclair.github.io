export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      tldr_newsletters: {
        Row: {
          id: string;
          created_at: string | null;
          date: string | null;
          title: string | null;
          content: Json | null;
          issue: string | null;
          url_ext: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string | null;
          date?: string | null;
          title?: string | null;
          content?: Json | null;
          issue?: string | null;
          url_ext?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string | null;
          date?: string | null;
          title?: string | null;
          content?: Json | null;
          issue?: string | null;
          url_ext?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
