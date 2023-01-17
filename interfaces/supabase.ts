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
      subscribers: {
        Row: {
          created_at: string | null;
          crypto_newsletter: boolean | null;
          email: string;
          first_name: string | null;
          id: string;
          last_edited: string | null;
          last_name: string | null;
          tech_newsletter: boolean | null;
        };
        Insert: {
          created_at?: string | null;
          crypto_newsletter?: boolean | null;
          email: string;
          first_name?: string | null;
          id?: string;
          last_edited?: string | null;
          last_name?: string | null;
          tech_newsletter?: boolean | null;
        };
        Update: {
          created_at?: string | null;
          crypto_newsletter?: boolean | null;
          email?: string;
          first_name?: string | null;
          id?: string;
          last_edited?: string | null;
          last_name?: string | null;
          tech_newsletter?: boolean | null;
        };
      };
      tldr_newsletters: {
        Row: {
          content: Json | null;
          created_at: string | null;
          date: string | null;
          id: string;
          issue: string | null;
          title: string | null;
          url_ext: string | null;
        };
        Insert: {
          content?: Json | null;
          created_at?: string | null;
          date?: string | null;
          id?: string;
          issue?: string | null;
          title?: string | null;
          url_ext?: string | null;
        };
        Update: {
          content?: Json | null;
          created_at?: string | null;
          date?: string | null;
          id?: string;
          issue?: string | null;
          title?: string | null;
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
