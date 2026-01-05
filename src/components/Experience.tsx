import { Link } from 'react-router-dom';

export function Experience() {
  const experiences = [
    {
      role: "Machine Learning Engineer",
      company: "National Center for Artificial Intelligence (CENIA)",
      period: "2024 - Present",
      description: "Contributing to LatAm GPT development. Leading data engineering and processing pipelines. Conducting continued pretraining of Llama 3.1 70B on 300B tokens using distributed training infrastructure with NeMo framework.",
      skills: ["LLMs", "Distributed Training", "NeMo", "Data Engineering", "Evaluation Frameworks"]
    },
    {
      role: "Machine Learning Engineer",
      company: "Reply Chile",
      period: "2023 - 2024",
      description: "Developed hybrid and semantic document classification models, improving document retrieval accuracy by 35%. Built production ML pipelines for enterprise document processing systems.",
      skills: ["Document Classification", "ML Pipelines", "Inference Optimization"]
    },
    {
      role: "Web Developer",
      company: "OpenBeauchef",
      period: "2022",
      description: "Led the development of a web platform supporting mentorship and OpenData initiatives.",
      skills: ["Web Development", "Platform Architecture"]
    },
    {
      role: "Professional Intern",
      company: "NEOSOFT",
      period: "2021",
      description: "Designed and implemented a web platform for automated financial report generation for Banco Estado.",
      skills: ["Web Development", "Financial Systems"]
    }
  ];

  const teaching = [
    {
      title: "Instructor - AI Generative & LLMs",
      organization: "Universidad de Chile - Diplomado en IA",
      description: "Designed and delivered 8 classes (24 hours) on Generative AI and LLMs. Covering RAG systems, fine-tuning, multimodal models, and practical AI applications."
    },
    {
      title: "AI Trainer & Corporate Instructor",
      organization: "Multiple Organizations",
      description: "Delivered specialized AI training for Universidad Adolfo Ibáñez, CNA, AFP Habitat, and DUOC UC."
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-white dark:bg-stone-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-red-900 dark:text-red-400 mb-6">Experience</h2>
          <div className="h-1 w-12 bg-red-900 dark:bg-red-500"></div>
        </div>

        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-stone-200 dark:border-stone-700">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-900 dark:bg-red-500"></div>

              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-stone-900 dark:text-stone-100">{exp.role}</h3>
                  <span className="font-mono text-sm text-stone-500 dark:text-stone-400 whitespace-nowrap">{exp.period}</span>
                </div>
                <div className="font-mono text-sm text-red-900 dark:text-red-400">{exp.company}</div>
                <p className="text-stone-600 dark:text-stone-400">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="font-mono text-xs text-stone-600 dark:text-stone-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-red-900 dark:text-red-400 mb-6">Teaching & Community</h3>
          <div className="h-1 w-12 bg-red-900 dark:bg-red-500"></div>
        </div>

        <div className="space-y-8">
          {teaching.map((item, index) => (
            <div key={index} className="border-l-2 border-stone-200 dark:border-stone-700 pl-8">
              <h4 className="text-stone-900 dark:text-stone-100 mb-1">{item.title}</h4>
              <div className="font-mono text-sm text-red-900 dark:text-red-400 mb-2">{item.organization}</div>
              <p className="text-stone-600 dark:text-stone-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/teaching"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm bg-red-900 dark:bg-red-500 text-white hover:bg-red-700 dark:hover:bg-red-400 transition-colors rounded"
          >
            You can find the slides HERE →
          </Link>
        </div>
      </div>
    </section>
  );
}
