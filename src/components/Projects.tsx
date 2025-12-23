export function Projects() {
  const projects = [
    {
      name: "NASA Space Explorer",
      description: "LlamaIndex Choice Award winner - Agentic AI application delivering live space data through custom MCP servers with 15 specialized NASA tools. Built for Gradio & MCP Hackathon.",
      tech: ["Python", "MCP", "LlamaIndex", "Gradio", "Agentic AI"],
      year: "2025",
      github: "https://huggingface.co/spaces/Agents-MCP-Hackathon/nasa-space-explorer"
    },
        {
      name: "Spanish LLM Fine-tuning Research",
      description: "Master's thesis project improving instruction-following capabilities of Falcon-7B for Spanish. Achieved 2.6-point improvement on adapted MT-Bench using LoRA and QLoRA techniques.",
      tech: ["PyTorch", "Transformers", "LoRA", "QLoRA", "Evaluation Frameworks"],
      year: "2024",
      github: "https://github.com/Clemente-H/Faisan"
    },
    {
      name: "LatAm GPT Development",
      description: "Contributing to large-scale Latin American language model development at CENIA. Focus on data engineering, processing pipelines, and distributed training infrastructure.",
      tech: ["PyTorch", "NeMo", "Slurm", "Data Engineering", "Distributed Training"],
      year: "2024 - Present",
      github: "https://www.latamgpt.org"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-neutral-50 dark:bg-stone-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-red-900 dark:text-red-400 mb-6">Selected Projects</h2>
          <div className="h-1 w-12 bg-red-900 dark:bg-red-500"></div>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="border-l-2 border-red-900 dark:border-red-500 pl-8 hover:border-red-700 dark:hover:border-red-400 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-2">
                    <h3 className="text-stone-900 dark:text-stone-100">{project.name}</h3>
                    <span className="font-mono text-sm text-stone-500 dark:text-stone-400">{project.year}</span>
                  </div>
                  <p className="text-stone-600 dark:text-stone-400 mb-4">{project.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="font-mono text-xs text-stone-600 dark:text-stone-400"
                  >
                    {tech}
                  </span>
                ))}
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-red-900 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors ml-auto"
                >
                  View Code →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}