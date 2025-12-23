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
                href="https://linkedin.com/in/clemente-henriquez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone-700 dark:text-stone-300 hover:text-red-900 dark:hover:text-red-400 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-red-900 dark:text-red-500" />
                <span>https://www.linkedin.com/in/clemente-henriquez-b0a883277</span>
              </a>

            </div>
          </div>

          <div className="bg-white dark:bg-stone-900 p-8 border border-stone-200 dark:border-stone-800">
            <h3 className="text-stone-900 dark:text-stone-100 mb-4">Quick Connect</h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-6">
              Send me a message and I'll get back to you as soon as possible.
            </p>
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 focus:border-red-900 dark:focus:border-red-500 focus:outline-none transition-colors placeholder:text-stone-400"
                />
              </div>
              <div>
                <textarea 
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 focus:border-red-900 dark:focus:border-red-500 focus:outline-none transition-colors resize-none placeholder:text-stone-400"
                />
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-red-900 dark:bg-red-800 hover:bg-red-800 dark:hover:bg-red-700 text-white transition-colors font-mono text-sm"
              >
                Send Message
              </button>
            </form>
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