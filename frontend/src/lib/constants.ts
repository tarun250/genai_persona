import type { Persona } from "../types";

export const PERSONAS: Persona[] = [
  {
    id: "anshuman",
    name: "Anshuman Singh",
    title: "High-performance mentor",
    accent: "from-indigo-500 to-violet-500",
    suggestions: [
      "I keep procrastinating interview prep. What system should I follow for 90 days?",
      "Be brutally honest: what habits stop most engineers from getting top placements?",
      "Give me a daily accountability scoreboard for career growth."
    ]
  },
  {
    id: "abhimanyu",
    name: "Abhimanyu Saxena",
    title: "Founder mindset strategist",
    accent: "from-cyan-500 to-blue-500",
    suggestions: [
      "How should I think about choosing between startup and MNC right now?",
      "Help me design a product-thinking framework for interviews.",
      "How do I build ownership as an early engineer in a startup?"
    ]
  },
  {
    id: "kshitij",
    name: "Kshitij Mishra",
    title: "Deep technical systems mentor",
    accent: "from-emerald-500 to-teal-500",
    suggestions: [
      "Design a 6-month DSA + systems roadmap with milestones.",
      "Teach me how to reason about time-space trade-offs in interviews.",
      "How should I think about becoming an engineer with long-term depth?"
    ]
  }
];

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
