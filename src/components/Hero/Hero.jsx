import foto from "../../assets/imgs/minha-foto.png";
import { FaJava, FaJs, FaPython, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

function Hero() {
  return (
    <section className="bg-gradient-to-br flex items-center justify-between from-slate-950 via-slate-900 to-violet-900 text-white py-16">
      <div className="container mx-auto px-4 flex items-center justify-between gap-2">
        <div className="mb-30">
          <p className="text-left text-sm uppercase font-bold text-violet-500 tracking-widest mb-2">
            Olá, eu sou
          </p>
          <h1 className="text-4xl font-bold text-left  mb-4">
            Matheus Albuquerque
          </h1>
          <h2 className="text-lg font-bold text-left mb-8">
            Desenvolvedor full-stack
          </h2>

          <p className="text-left max-w-2xl  text-gray-300 mb-">
            Formado em Análise e Desenvolvimento de Sistemas, Apaixonado por
            tecnologia desde os 7 anos. Desenolvendo soluções robustas e
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
        </div>

        <div className="mt-8">
          <img
            src={foto}
            alt="Matheus Albuquerque"
            className="w-80 h-96 object-cover flex justify-left rounded-2xl border border-violet-500/30"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
