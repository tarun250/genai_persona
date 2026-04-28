import type { Message, Persona } from "../types";

interface ChatWindowProps {
  messages: Message[];
  isTyping: boolean;
  persona: Persona;
}

export function ChatWindow({ messages, isTyping, persona }: ChatWindowProps) {
  return (
    <div className="scrollbar-thin h-[52vh] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-6">
      {messages.length === 0 ? (
        <div className="flex h-full items-center justify-center text-center text-slate-400">
          <div>
            <p className="text-lg font-medium text-slate-200">Start your mentoring session</p>
            <p className="mt-2 text-sm">Ask {persona.name} anything about career, product, or engineering excellence.</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message-enter flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[75%] ${
                  message.role === "user"
                    ? "bg-slate-100 text-slate-900"
                    : "border border-slate-700 bg-slate-900 text-slate-100"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-300">
                {persona.name} is typing...
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
