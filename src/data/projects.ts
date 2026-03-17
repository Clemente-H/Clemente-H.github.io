export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  year: number;
  tags: string[];
  links: ProjectLink[];
}

export interface ProjectCategory {
  id: string;
  title: string;
  projects: Project[];
}

export const projectCategories: ProjectCategory[] = [
  {
    id: "hackathons",
    title: "Hackathons",
    projects: [
      {
        name: "NASA Space Explorer",
        description:
          "LlamaIndex Choice Award winner. Agentic AI application delivering live space data through custom MCP servers with 15 specialized NASA tools. Built for Gradio & MCP Hackathon.",
        year: 2025,
        tags: ["Python", "MCP", "LlamaIndex", "Gradio", "Agentic AI"],
        links: [
          { label: "GitHub", url: "https://github.com/Clemente-H/gradio-hackaton-mcp-nasa" },
          { label: "Demo", url: "https://huggingface.co/spaces/Agents-MCP-Hackathon/nasa-space-explorer" },
        ],
      },
      {
        name: "Vibe Mood Playlist Agent",
        description:
          "Mood-based playlist generator built for Google Cloud Run hackathon. Creates personalized playlists based on your current vibe using LLM agents.",
        year: 2025,
        tags: ["Python", "LLM Agents", "Google Cloud Run", "Spotify API"],
        links: [
          { label: "GitHub", url: "https://github.com/Clemente-H/vibe-mood-playlist-agent" },
        ],
      },
      {
        name: "Synthetic Data Platform",
        description:
          "Platform for generating synthetic datasets using Ollama and local LLMs. Built for OpenAI hackathon.",
        year: 2025,
        tags: ["Python", "Ollama", "Synthetic Data", "LLMs"],
        links: [
          { label: "GitHub", url: "https://github.com/Clemente-H/synthetic-data-plataform" },
        ],
      },
      {
        name: "Mistral Robot",
        description: "Hackathon project using Mistral AI for conversational robotics interactions.",
        year: 2026,
        tags: ["Python", "Mistral AI", "Robotics"],
        links: [
          { label: "GitHub", url: "https://github.com/Clemente-H/Mistral-robot" },
        ],
      },
    ].sort((a, b) => b.year - a.year),
  },
  {
    id: "personal",
    title: "Data / Web / Automating stuff",
    projects: [
      {
        name: "Medical Paper LLM Analysis",
        description:
          "LLM-based tool that checks paper relevance based on abstracts. Built to help my partner speed up her literature review workflow.",
        year: 2025,
        tags: ["Python", "LLMs", "NLP", "Research"],
        links: [
          { label: "GitHub", url: "https://github.com/Clemente-H/MedicalPaperLLMAnalisis" },
        ],
      },
      {
        name: "Marp Web Editor",
        description:
          "Browser-based editor for creating Marp presentations. Write markdown and preview your slides live.",
        year: 2025,
        tags: ["JavaScript", "Marp", "Web"],
        links: [
          { label: "GitHub", url: "https://github.com/Clemente-H/marp-web-editor" },
        ],
      },
      {
        name: "Timeline App",
        description: "Web interface to visualize and share timelines interactively.",
        year: 2025,
        tags: ["Python", "Web", "Data Visualization"],
        links: [
          { label: "GitHub", url: "https://github.com/Clemente-H/timeline-app" },
        ],
      },
      {
        name: "Summary Daily News",
        description:
          "Automated pipeline that delivers personalized daily news summaries straight to your phone.",
        year: 2026,
        tags: ["Python", "Automation", "NLP"],
        links: [
          { label: "GitHub", url: "https://github.com/Clemente-H/summary_daily_news" },
        ],
      },
      {
        name: "Bike Itaú Analysis",
        description:
          "Data analysis of Bike Itaú bike-sharing stations in Santiago, exploring usage patterns and station availability.",
        year: 2026,
        tags: ["Python", "Data Analysis", "Visualization"],
        links: [
          { label: "GitHub", url: "https://github.com/Clemente-H/bike-itau-analisis" },
        ],
      },
      {
        name: "Telegram Hangman Bot",
        description: "Classic hangman game playable through a Telegram bot.",
        year: 2025,
        tags: ["Python", "Telegram Bot"],
        links: [
          { label: "GitHub", url: "https://github.com/Clemente-H/telegram-bot-ahorcado-game" },
        ],
      },
    ].sort((a, b) => b.year - a.year),
  },
  {
    id: "llm",
    title: "LLM / AI",
    projects: [
      {
        name: "Spanish LLM Fine-tuning (Faisan)",
        description:
          "Master's thesis improving instruction-following of Falcon-7B for Spanish. Achieved a 2.6-point improvement on adapted MT-Bench using LoRA and QLoRA techniques.",
        year: 2023,
        tags: ["PyTorch", "Transformers", "LoRA", "QLoRA", "Fine-tuning"],
        links: [
          { label: "GitHub", url: "https://github.com/Clemente-H/Faisan" },
        ],
      },
      {
        name: "Mistral Telegram Calendar Bot",
        description:
          "Telegram bot that manages your calendar using natural language, powered by Mistral AI.",
        year: 2025,
        tags: ["Python", "Mistral AI", "Telegram", "NLP"],
        links: [
          { label: "GitHub", url: "https://github.com/Clemente-H/mistral-telegram-calendar-bot" },
        ],
      },
    ].sort((a, b) => b.year - a.year),
  },
  {
    id: "academic",
    title: "Academic",
    projects: [
      {
        name: "GenAI Diplomado",
        description:
          "Notebooks and materials from the Generative AI Diplomado at CENIA, covering LLMs, fine-tuning, RAG, and agentic systems.",
        year: 2025,
        tags: ["Python", "Jupyter", "Generative AI", "Education"],
        links: [
          { label: "GitHub", url: "https://github.com/Clemente-H/GENAI-Diplomado" },
        ],
      },
      {
        name: "MNIST Diplomado CENIA",
        description:
          "Hands-on MNIST classification notebook for the CENIA AI Diplomado. Introduction to deep learning in practice.",
        year: 2025,
        tags: ["Python", "PyTorch", "Deep Learning", "Education"],
        links: [
          { label: "GitHub", url: "https://github.com/Clemente-H/mnist_diplomado_cenia" },
        ],
      },
    ].sort((a, b) => b.year - a.year),
  },
];
