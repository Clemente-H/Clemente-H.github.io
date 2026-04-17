import { Link } from 'react-router-dom';
import { projectCategories } from '../data/projects';

const featured = projectCategories
  .flatMap((c) => c.projects)
  .filter((p) => p.featured);

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-neutral-50 dark:bg-stone-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-red-900 dark:text-red-400 mb-6">Selected Projects</h2>
          <div className="h-1 w-12 bg-red-900 dark:bg-red-500"></div>
        </div>

        <div className="space-y-12">
          {featured.map((project, index) => (
            <div
              key={index}
              className="border-l-2 border-red-900 dark:border-red-500 pl-8 hover:border-red-700 dark:hover:border-red-400 transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-2">
                <h3 className="text-stone-900 dark:text-stone-100">{project.name}</h3>
                <span className="font-mono text-sm text-stone-500 dark:text-stone-400">{project.year}</span>
              </div>
              <p className="text-stone-600 dark:text-stone-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap items-center gap-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="font-mono text-xs text-stone-600 dark:text-stone-400">
                    {tag}
                  </span>
                ))}
                <div className="ml-auto flex gap-4">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
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

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm bg-red-900 dark:bg-red-500 text-white hover:bg-red-700 dark:hover:bg-red-400 transition-colors rounded"
          >
            You can find all my projects HERE →
          </Link>
        </div>
      </div>
    </section>
  );
}
