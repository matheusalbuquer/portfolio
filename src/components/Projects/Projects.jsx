import { projects } from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-[#020617] via-[#030712] to-[#0F172A] text-white py-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Projetos em Destaque</h2>

          <a href="#" className="text-violet-400 hover:text-violet-300">
            Ver todos os projetos →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="bg-slate-800 px-3 py-1 rounded">
                    React.js
                  </span>
                  <span className="bg-slate-800 px-3 py-1 rounded">
                    Node.js
                  </span>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-violet-500 rounded-lg py-2 text-center"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-violet-600 rounded-lg py-2 text-center"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
