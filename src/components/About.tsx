export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-red-900 mb-8">
          <span className="text-red-400"># </span>
          about_me()
        </h2>
        
        <div className="space-y-6 text-stone-700">
          <p>
            I'm a software engineer passionate about creating elegant solutions to complex problems. 
            With a focus on clean code and user-centric design, I build applications that make a difference.
          </p>
          
          <p>
            My journey in software development has taken me through various technologies and frameworks, 
            always learning and adapting to new challenges. I believe in writing maintainable code and 
            collaborating effectively with teams.
          </p>
          
          <div className="font-mono text-sm bg-stone-100 p-6 border-l-4 border-red-900">
            <div className="text-stone-500"># Quick facts</div>
            <div className="mt-2 space-y-1">
              <div><span className="text-red-700">▸</span> Location: Your City</div>
              <div><span className="text-red-700">▸</span> Experience: X years</div>
              <div><span className="text-red-700">▸</span> Education: Your Degree</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
