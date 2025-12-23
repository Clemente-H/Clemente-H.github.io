import { ThemeToggle } from './ThemeToggle';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm border-b border-stone-200 dark:border-stone-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="font-mono text-red-900 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
          >
            clemente-h.dev
          </Link>

          <div className="flex items-center gap-6">
            <ul className="flex gap-8 font-mono text-sm">
              <li>
                <a
                  href="/#bio"
                  className="text-stone-600 dark:text-stone-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
                >
                  Bio
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  className="text-stone-600 dark:text-stone-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/#experience"
                  className="text-stone-600 dark:text-stone-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <Link
                  to="/teaching"
                  className="text-stone-600 dark:text-stone-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
                >
                  Teaching
                </Link>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-stone-600 dark:text-stone-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}