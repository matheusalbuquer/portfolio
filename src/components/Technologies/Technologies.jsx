import { FaReact, FaJava, FaDocker, FaGitAlt, FaGithub } from "react-icons/fa";

import {
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiIntellijidea,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Technologies() {
  const techs = [
    { name: "Java", icon: <FaJava size={40} className="text-orange-500" /> },
    {
      name: "Spring Boot",
      icon: <SiSpringboot size={40} className="text-green-500" />,
    },
    {
      name: "React",
      icon: <FaReact size={40} className="text-cyan-400" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql size={40} className="text-blue-500" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql size={40} className="text-blue-400" />,
    },
    {
      name: "Docker",
      icon: <FaDocker size={40} className="text-blue-400" />,
    },
    { name: "Git", icon: <FaGitAlt size={40} className="text-orange-600" /> },
    {
      name: "GitHub",
      icon: <FaGithub size={40} className="text-white" />,
    },
    {
      name: "VS Code",
      icon: <VscVscode size={40} className="text-blue-500" />,
    },
    {
      name: "IntelliJ",
      icon: <SiIntellijidea size={40} className="text-pink-500" />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss size={40} className="text-cyan-400" />,
    },
  ];

  return (
    <section
      id="technologies"
      className="py-12  bg-gradient-to-r
from-[#020617]
via-[#030712]
to-[#030349] text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Tecnologias que utilizo</h2>

        <div className="flex flex-wrap gap-4">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="
            w-20 h-20
            bg-slate-900
            border border-violet-500/20
            rounded-xl
            flex
            items-center
            justify-center
            hover:border-violet-500
            hover:-translate-y-1
            transition-all
          "
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
