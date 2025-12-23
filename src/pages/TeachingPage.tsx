import { Header } from '../components/Header';
import { Contact } from '../components/Contact';
import { FileText, Code } from 'lucide-react';

export function TeachingPage() {
  const classes = [
    {
      title: "Generative Models",
      category: "GENERATIVE AI",
      description: "Introduction to generative models for computer vision applications",
      slides: "https://github.com/valbarriere/CC6XXX-Generative-AI/blob/main/Slides_es/Generative_vision.pdf",
      colab: "http://colab.research.google.com/github/valbarriere/CC6XXX-Generative-AI/blob/main/Labs/Lab1-Toonification.ipynb"
    },
    {
      title: "Generative LLMs",
      category: "GENERATIVE AI",
      description: "Large Language Models fundamentals and generative capabilities",
      slides: "https://github.com/valbarriere/CC6XXX-Generative-AI/blob/main/Slides_es/N_Generative_LLMs.pdf",
      colab: "http://colab.research.google.com/github/valbarriere/CC6XXX-Generative-AI/blob/main/Labs/Lab1-Toonification.ipynb"
    },
    {
      title: "Efficiency & Deployment",
      category: "LLM OPTIMIZATION",
      description: "Model efficiency, alignment techniques, and production deployment strategies",
      slides: "https://github.com/valbarriere/CC6XXX-Generative-AI/blob/main/Slides_es/Efficiency_and_alignment.pdf",
      colab: "http://colab.research.google.com/github/valbarriere/CC6XXX-Generative-AI/blob/main/Labs/Lab3-alignment_deployment_lab_v2.ipynb"
    },
    {
      title: "Large Multimodal Models",
      category: "MULTIMODAL AI",
      description: "Vision-language models and multimodal AI architectures",
      slides: "https://github.com/valbarriere/CC6XXX-Generative-AI/blob/main/Slides_es/Multimodal_LLM.pdf",
      colab: "http://colab.research.google.com/github/valbarriere/CC6XXX-Generative-AI/blob/main/Labs/Lab5_lmm_final.ipynb"
    },
    {
      title: "Audio Models",
      category: "AUDIO AI",
      description: "Audio processing and classification with deep learning models",
      slides: "https://github.com/valbarriere/CC6XXX-Generative-AI/blob/main/Slides_es/Audio_models.pdf",
      colab: "http://colab.research.google.com/github/valbarriere/CC6XXX-Generative-AI/blob/main/Labs/Lab6-1_AudioProcessing_students.ipynb"
    },
    {
      title: "RAG Systems",
      category: "LLM APPLICATIONS",
      description: "Retrieval Augmented Generation for enhanced LLM applications",
      slides: "https://github.com/valbarriere/CC6XXX-Generative-AI/blob/main/Slides_es/Rag_v2.pdf",
      colab: "http://colab.research.google.com/github/valbarriere/CC6XXX-Generative-AI/blob/main/Labs/lab_rag_scotiabank.ipynb"
    },
    {
      title: "Advanced LLMs: Agents & Tools",
      category: "AGENTIC AI",
      description: "Building autonomous AI agents with tool use and advanced reasoning",
      slides: "https://github.com/valbarriere/CC6XXX-Generative-AI/blob/main/Slides_es/advanced_llm_v4.pdf",
      colab: "http://colab.research.google.com/github/valbarriere/CC6XXX-Generative-AI/blob/main/Labs/lab_agente_pasteleria_hf.ipynb"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-stone-900">
      <Header />

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-stone-50 via-red-50/30 to-stone-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h1 className="text-red-900 dark:text-red-400 text-4xl md:text-5xl mb-6">Teaching</h1>
            <div className="h-1 w-12 bg-red-900 dark:bg-red-500 mb-8"></div>
            <div className="max-w-3xl space-y-4 text-stone-600 dark:text-stone-400">
              <p>
                Generative AI & LLMs course taught with <a href="https://github.com/valbarriere" target="_blank" rel="noopener noreferrer" className="text-red-900 dark:text-red-400 hover:underline">Valentin Barriere</a> at Universidad de Chile.
              </p>
              <p>
                This comprehensive course covers the latest developments in AI generative models,
                from fundamental concepts to advanced applications. Students gain hands-on experience
                through practical labs and real-world projects.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {classes.map((classItem, index) => (
              <div
                key={index}
                className="bg-white dark:bg-stone-900 border-l-4 border-red-900 dark:border-red-500 hover:border-red-700 dark:hover:border-red-400 transition-all duration-200"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-stone-900 dark:text-stone-100 text-xl font-semibold">
                          {classItem.title}
                        </h3>
                        <span className="px-2 py-1 text-xs font-mono bg-red-900 dark:bg-red-500 text-white rounded">
                          {classItem.category}
                        </span>
                      </div>
                      <p className="text-stone-600 dark:text-stone-400">
                        {classItem.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <a
                      href={classItem.slides}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 hover:bg-red-900 hover:text-white dark:hover:bg-red-500 transition-colors rounded"
                    >
                      <FileText className="w-4 h-4" />
                      Slides
                    </a>
                    <a
                      href={classItem.colab}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 hover:bg-red-900 hover:text-white dark:hover:bg-red-500 transition-colors rounded"
                    >
                      <Code className="w-4 h-4" />
                      Tutorial
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://github.com/valbarriere/CC6XXX-Generative-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-red-900 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
            >
              View Full Course Repository →
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}