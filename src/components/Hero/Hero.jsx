import foto from "../../assets/imgs/minha-foto01.png";
import {
  FaJava,
  FaJs,
  FaPython,
  FaReact,
  FaArrowRight,
  FaRegCommentDots,
} from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br flex items-center justify-between bg-gradient-to-r
from-[#020617]
via-[#030712]
to-[#341244] text-white py-20"
    >
      <div className="container mx-auto px-8 flex items-start justify-between gap-4">
        <div className="mb-2">
          <p className="text-left text-sm uppercase font-bold text-violet-500 tracking-widest mb-2">
            Olá, eu sou
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            Matheus Albuquerque
          </h1>
          <h2 className="text-lg font-bold text-left mb-8">
            Desenvolvedor Full Stack
          </h2>

          <p className="text-left max-w-2xl  text-gray-300 mb-">
            Formado em Análise e Desenvolvimento de Sistemas, Apaixonado por
            tecnologia desde os 7 anos. Desenvolvendo soluções robustas e
            eficientes, com foco em qualidade e inovação. Tenho experiência em
            diversas tecnologias, incluindo Java, Spring Boot, JavaScript,
            React.js, Node.js e Python. Meu objetivo é transformar ideias em
            realidade por meio do código.
          </p>
          <div className="flex gap-2 mt-4">
            <p className="flex items-center gap-2 border border-violet-500 text-orange-500 py-2 px-4 rounded-lg">
              <FaJava size={20} />
              JAVA
            </p>
            <p className="flex items-center gap-2 border border-violet-500 text-green-600 py-2 px-4 rounded-lg">
              <SiSpringboot size={20} />
              SPRING BOOT
            </p>
            <p className="flex items-center gap-2 border border-violet-500 text-yellow-500 py-2 px-4 rounded-lg">
              <FaJs size={20} />
              JAVASCRIPT
            </p>
            <p className="flex items-center gap-2 border border-violet-500 text-blue-500 py-2 px-4 rounded-lg">
              <FaReact size={20} />
              REACT.JS
            </p>
            <p className="flex items-center gap-2 border border-violet-500 text-green-500 py-2 px-4 rounded-lg">
              <FaNodeJs size={20} />
              NODE.JS
            </p>
            <p className="flex items-center gap-2 border border-violet-500 text-blue-400 py-2 px-4 rounded-lg">
              <FaPython size={20} />
              PYTHON
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-6 rounded flex items-center gap-2">
              Ver Projetos
              <FaArrowRight size={14} />
            </button>

            <button className="border border-violet-500 text-white font-bold py-3 px-6 rounded flex items-center gap-2">
              Entre em contato
              <FaRegCommentDots size={14} />
            </button>
          </div>
        </div>

        <div className="mt-8 relative right-16">
          <img
            src={foto}
            alt="Matheus Albuquerque"
            className="w-70 h-76 object-cover rounded-2xl border-1 border-violet-500/30"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
