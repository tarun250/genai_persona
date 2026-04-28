import type { Persona } from "../types";

interface PersonaSwitcherProps {
  personas: Persona[];
  activePersona: Persona;
  onSelect: (id: Persona["id"]) => void;
}

export function PersonaSwitcher({ personas, activePersona, onSelect }: PersonaSwitcherProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {personas.map((persona) => {
        const isActive = activePersona.id === persona.id;

        return (
          <button
            key={persona.id}
            onClick={() => onSelect(persona.id)}
            className={`rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
              isActive
                ? "border-slate-300 bg-slate-800/95 shadow-lg shadow-slate-900/50"
                : "border-slate-700 bg-slate-900/60 hover:border-slate-500"
            }`}
          >
            <p className="font-semibold text-slate-100">{persona.name}</p>
            <p className="text-xs text-slate-400">{persona.title}</p>
          </button>
        );
      })}
    </div>
  );
}
