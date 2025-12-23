import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-neutral-50 dark:bg-stone-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-red-900 dark:text-red-400 mb-6">Contact</h2>
          <div className="h-1 w-12 bg-red-900 dark:bg-red-500"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-stone-600 dark:text-stone-400">
              I'm always interested in collaborating on AI/ML projects, discussing
              research opportunities, or exploring teaching and consulting engagements.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:clemente.henriquez@ug.uchile.cl"
                className="flex items-center gap-3 text-stone-700 dark:text-stone-300 hover:text-red-900 dark:hover:text-red-400 transition-colors group"
              >
                <Mail className="w-5 h-5 text-red-900 dark:text-red-500" />
                <span>clemente.henriquez@ug.uchile.cl</span>
              </a>

              <a
                href="https://github.com/Clemente-H"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone-700 dark:text-stone-300 hover:text-red-900 dark:hover:text-red-400 transition-colors group"
              >
                <Github className="w-5 h-5 text-red-900 dark:text-red-500" />
                <span>github.com/Clemente-H</span>
              </a>

              <a
                href="www.linkedin.com/in/clemente-henriquez-b0a883277"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone-700 dark:text-stone-300 hover:text-red-900 dark:hover:text-red-400 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-red-900 dark:text-red-500" />
                <span>www.linkedin.com/in/clemente-henriquez-b0a883277</span>
              </a>

            </div>
          </div>
        </div>
        
        <footer className="mt-20 pt-8 border-t border-stone-300 dark:border-stone-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-mono text-sm text-stone-500 dark:text-stone-400">
              <p>© {new Date().getFullYear()} Clemente Henríquez. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="font-mono text-xs text-stone-400 dark:text-stone-500 whitespace-pre leading-tight">
{`  /\\_/\\
 ( o.o )
  > ^ <`}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}