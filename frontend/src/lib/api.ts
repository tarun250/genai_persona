import { API_BASE_URL } from "./constants";
import type { Message, PersonaId } from "../types";

interface ChatResponse {
  reply: string;
}

export async function sendChatMessage(persona: PersonaId, message: string, history: Message[]) {
  const response = await fetch(`${API_BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ persona, message, history })
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({ error: "Unexpected error" }));
    throw new Error(data.error || "Unable to process request right now.");
  }

  const data = (await response.json()) as ChatResponse;
  return data.reply;
}
