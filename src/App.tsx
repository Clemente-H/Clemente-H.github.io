import { Header } from './components/Header';
import { Bio } from './components/Bio';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-stone-900">
      <Header />
      <Bio />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}