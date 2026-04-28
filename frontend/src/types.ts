export type PersonaId = "anshuman" | "abhimanyu" | "kshitij";

export type ChatRole = "user" | "assistant";

export interface Message {
  id: string;
  role: ChatRole;
  content: string;
}

export interface Persona {
  id: PersonaId;
  name: string;
  title: string;
  accent: string;
  suggestions: string[];
}
