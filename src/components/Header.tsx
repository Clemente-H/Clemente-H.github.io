import { ThemeToggle } from './ThemeToggle';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

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
                <button
                  onClick={() => scrollToSection('bio')}
                  className="text-stone-600 dark:text-stone-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
                >
                  Bio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-stone-600 dark:text-stone-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-stone-600 dark:text-stone-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
                >
                  Experience
                </button>
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
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-stone-600 dark:text-stone-400 hover:text-red-900 dark:hover:text-red-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}