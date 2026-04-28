import { useMemo, useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatWindow } from "./components/ChatWindow";
import { PersonaSwitcher } from "./components/PersonaSwitcher";
import { SuggestionChips } from "./components/SuggestionChips";
import { sendChatMessage } from "./lib/api";
import { PERSONAS } from "./lib/constants";
import type { Message, PersonaId } from "./types";

const id = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

function App() {
  const [activePersonaId, setActivePersonaId] = useState<PersonaId>("anshuman");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState("");

  const activePersona = useMemo(
    () => PERSONAS.find((persona) => persona.id === activePersonaId) ?? PERSONAS[0],
    [activePersonaId]
  );

  const handlePersonaChange = (nextPersona: PersonaId) => {
    if (nextPersona === activePersonaId) {
      return;
    }

    setActivePersonaId(nextPersona);
    setMessages([]);
    setInput("");
    setError("");
    setIsTyping(false);
  };

  const handleSend = async (manualMessage?: string) => {
    const text = (manualMessage ?? input).trim();
    if (!text || isTyping) {
      return;
    }

    const userMessage: Message = { id: id(), role: "user", content: text };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setIsTyping(true);
    setError("");

    try {
      const reply = await sendChatMessage(activePersona.id, text, nextMessages);
      setMessages((prev) => [...prev, { id: id(), role: "assistant", content: reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong while calling Gemini.");
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-6 sm:px-6 lg:px-8">
      <header className="mb-6">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Scaler Academy | Prompt Engineering Assignment</p>
        <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Persona-Based AI Chatbot</h1>
      </header>

      <section className="rounded-3xl border border-slate-800 bg-slate-900/50 p-4 shadow-2xl shadow-black/30 sm:p-6">
        <PersonaSwitcher personas={PERSONAS} activePersona={activePersona} onSelect={handlePersonaChange} />

        <div className={`mt-4 inline-flex rounded-full bg-gradient-to-r px-3 py-1 text-xs text-white ${activePersona.accent}`}>
          Active Persona: {activePersona.name}
        </div>

        <div className="mt-4">
          <SuggestionChips
            suggestions={activePersona.suggestions}
            onSelect={(value) => {
              setInput(value);
              handleSend(value);
            }}
          />
        </div>

        <div className="mt-4">
          <ChatWindow messages={messages} isTyping={isTyping} persona={activePersona} />
        </div>

        {error && <p className="mt-3 text-sm text-rose-400">{error}</p>}

        <ChatInput value={input} setValue={setInput} onSubmit={() => handleSend()} disabled={isTyping} />
      </section>
    </main>
  );
}

export default App;
