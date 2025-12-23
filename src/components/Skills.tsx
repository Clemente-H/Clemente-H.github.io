export function Skills() {
  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "Go"],
    frontend: ["React", "Next.js", "Vue", "Tailwind CSS", "HTML/CSS"],
    backend: ["Node.js", "Django", "Express", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Docker", "AWS", "CI/CD", "Linux"]
  };

  return (
    <section id="skills" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-red-900 mb-8">
          <span className="text-red-400"># </span>
          skills.json
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category}
              className="bg-stone-100 p-6 border border-stone-200"
            >
              <h3 className="font-mono text-red-900 mb-4">
                "{category}":
              </h3>
              <div className="font-mono text-sm space-y-2">
                {items.map((skill, index) => (
                  <div key={index} className="text-stone-700">
                    <span className="text-red-400">▸</span> {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
