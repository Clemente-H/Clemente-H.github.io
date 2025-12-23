export function Bio() {
  return (
    <section id="bio" className="pt-32 pb-20 px-6 bg-gradient-to-br from-stone-50 via-red-50/30 to-stone-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-8 mb-12">
          <img
            src="/5174883538514850246.jpg"
            alt="Clemente Henríquez"
            className="w-24 h-24 rounded-full object-cover border-2 border-red-900 dark:border-red-500"
          />
          <div className="flex-1 space-y-3">
            <div className="font-mono text-sm text-red-900 dark:text-red-400 tracking-wider">
              MACHINE LEARNING ENGINEER
            </div>
            <h1 className="text-stone-900 dark:text-stone-100 text-4xl md:text-5xl tracking-tight">
              Clemente Henríquez
            </h1>
            <p className="text-stone-600 dark:text-stone-400 text-lg">
              Specializing in large language models and open-source AI development.
              Building production-ready ML systems and contributing to LatAm GPT.
            </p>
          </div>
        </div>

        <div className="space-y-6 text-stone-700 dark:text-stone-300">
          <p>
            Machine Learning Engineer with expertise in large language models, LLM training,
            and fine-tuning. Currently contributing to LatAm GPT at CENIA, working on large-scale
            Latin American language model development with distributed training infrastructure.
          </p>

          <p>
            Master's graduate from Universidad de Chile with research focus on improving
            instruction-following capabilities of LLMs in Spanish. Active educator delivering
            AI training to universities and organizations across Chile.
          </p>


          <div className="pt-6 grid grid-cols-2 gap-6">
            <div>
              <div className="font-mono text-sm text-red-900 dark:text-red-400 mb-2">Location</div>
              <div className="text-stone-900 dark:text-stone-100">Santiago, Chile</div>
            </div>
            <div>
              <div className="font-mono text-sm text-red-900 dark:text-red-400 mb-2">Education</div>
              <div className="text-stone-900 dark:text-stone-100">M.Sc. Computer Science</div>
            </div>
            <div>
              <div className="font-mono text-sm text-red-900 dark:text-red-400 mb-2">Experience</div>
              <div className="text-stone-900 dark:text-stone-100">3+ years ML/AI</div>
            </div>
            <div>
              <div className="font-mono text-sm text-red-900 dark:text-red-400 mb-2">Focus</div>
              <div className="text-stone-900 dark:text-stone-100">LLMs & Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}