import { Header } from '../components/Header';
import { Contact } from '../components/Contact';
import { projectCategories } from '../data/projects';

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-stone-900">
      <Header />
      <main className="pt-24 pb-0">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-16">
            <h1 className="text-red-900 dark:text-red-400 mb-6">Projects</h1>
            <div className="h-1 w-12 bg-red-900 dark:bg-red-500 mb-6"></div>
            <p className="text-stone-600 dark:text-stone-400 font-mono text-sm">
              A collection of things I've built — hackathons, side projects, research, and coursework.
            </p>
          </div>

          <div className="space-y-20">
            {projectCategories.map((category) => (
              <div key={category.id}>
                <div className="flex items-center gap-4 mb-10">
                  <span className="font-mono text-xs text-red-900 dark:text-red-400 uppercase tracking-widest">
                    {category.title}
                  </span>
                  <div className="flex-1 h-px bg-stone-200 dark:bg-stone-800"></div>
                </div>

                <div className="space-y-10">
                  {category.projects.map((project, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-red-900 dark:border-red-500 pl-8 hover:border-red-700 dark:hover:border-red-400 transition-colors"
                    >
                      <div className="flex items-baseline gap-4 mb-2">
                        <h3 className="text-stone-900 dark:text-stone-100">{project.name}</h3>
                        <span className="font-mono text-sm text-stone-500 dark:text-stone-400 shrink-0">
                          {project.year}
                        </span>
                      </div>

                      <p className="text-stone-600 dark:text-stone-400 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="font-mono text-xs text-stone-500 dark:text-stone-400"
                          >
                            {tag}
                          </span>
                        ))}
                        <div className="ml-auto flex gap-4">
                          {project.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-xs text-red-900 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                            >
                              {link.label} →
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Contact />
    </div>
  );
}
