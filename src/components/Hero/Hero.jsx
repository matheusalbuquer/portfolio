import foto from "../../assets/imgs/minha-foto01.png";
import {
  FaJava,
  FaJs,
  FaPython,
  FaReact,
  FaArrowRight,
  FaWhatsapp,
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
      <div className="container mx-auto px-6 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="mb-2">
          <p className="text-left text-sm uppercase font-bold text-violet-500 tracking-widest mb-2">
            Olá, eu sou
          </p>
          <h1 className="text-5xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
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
          <div className="flex flex-wrap gap-3 mt-4">
            <p
              className="
      group flex items-center gap-2
      border border-violet-500/40
      text-orange-500
      py-2 px-4 rounded-lg
      cursor-pointer
      transition-all duration-300
      hover:bg-slate-900/80
      hover:-translate-y-1
      hover:scale-105
      hover:border-orange-500
      hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]
    "
            >
              <FaJava
                size={20}
                className="transition-all duration-300 group-hover:rotate-12 group-hover:scale-125"
              />
              JAVA
            </p>

            <p
              className="
      group flex items-center gap-2
      border border-violet-500/40
      text-green-500
      py-2 px-4 rounded-lg
      cursor-pointer
      transition-all duration-300
      hover:bg-slate-900/80
      hover:-translate-y-1
      hover:scale-105
      hover:border-green-500
      hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]
    "
            >
              <SiSpringboot
                size={20}
                className="transition-all duration-300 group-hover:rotate-12 group-hover:scale-125"
              />
              SPRING BOOT
            </p>

            <p
              className="
                group flex items-center gap-2
                border border-violet-500/40
                text-yellow-500
                py-2 px-4 rounded-lg
                cursor-pointer
                transition-all duration-300
                hover:bg-slate-900/80
                hover:-translate-y-1
                hover:scale-105
                hover:border-yellow-400
                hover:shadow-[0_0_20px_rgba(250,204,21,0.35)]
           "
            >
              <FaJs
                size={20}
                className="transition-all duration-300 group-hover:rotate-12 group-hover:scale-125"
              />
              JAVASCRIPT
            </p>

            <p
              className="
      group flex items-center gap-2
      border border-violet-500/40
      text-cyan-400
      py-2 px-4 rounded-lg
      cursor-pointer
      transition-all duration-300
      hover:bg-slate-900/80
      hover:-translate-y-1
      hover:scale-105
      hover:border-cyan-400
      hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
    "
            >
              <FaReact
                size={20}
                className="transition-all duration-300 group-hover:rotate-[180deg] group-hover:scale-125"
              />
              REACT.JS
            </p>

            <p
              className="
      group flex items-center gap-2
      border border-violet-500/40
      text-green-400
      py-2 px-4 rounded-lg
      cursor-pointer
      transition-all duration-300
      hover:bg-slate-900/80
      hover:-translate-y-1
      hover:scale-105
      hover:border-green-400
      hover:shadow-[0_0_20px_rgba(74,222,128,0.35)]
    "
            >
              <FaNodeJs
                size={20}
                className="transition-all duration-300 group-hover:rotate-12 group-hover:scale-125"
              />
              NODE.JS
            </p>

            <p
              className="
      group flex items-center gap-2
      border border-violet-500/40
      text-blue-400
      py-2 px-4 rounded-lg
      cursor-pointer
      transition-all duration-300
      hover:bg-slate-900/80
      hover:-translate-y-1
      hover:scale-105
      hover:border-blue-400
      hover:shadow-[0_0_20px_rgba(96,165,250,0.35)]
    "
            >
              <FaPython
                size={20}
                className="transition-all duration-300 group-hover:rotate-12 group-hover:scale-125"
              />
              PYTHON
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              href="#projects"
              className="
          bg-gradient-to-r
          from-violet-600
          to-purple-500
          hover:scale-105
          hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]
          text-white
          font-semibold
          py-3
          px-6
          rounded-xl
          flex
          items-center
          gap-2
          transition-all
          duration-300
  "
            >
              Ver Projetos
              <FaArrowRight size={14} />
            </button>

            <a
              href="https://wa.me/5581984220414?text=Olá%20Matheus,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                border
                border-violet-500
                hover:border-green-500
                hover:bg-green-500/10
                text-white
                font-semibold
                py-3
                px-6
                rounded-xl
                flex
                items-center
                gap-2
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]
"
            >
              Entre em contato
              <FaWhatsapp
                size={18}
                className="
                  text-green-500
                  transition-all
                  duration-300
                  group-hover:scale-125
                "
              />
            </a>
          </div>
        </div>

        <div className="mt-8 relative right-16">
          {/* Glow atrás */}
          <div className="absolute inset-0 bg-violet-600 blur-3xl opacity-20 rounded-full"></div>

          <img
            src={foto}
            alt="Matheus Albuquerque"
            className="
            relative
            w-48
            h-56
            sm:w-64
            sm:h-72
            md:w-72
            md:h-80
            object-cover
            rounded-3xl
            border
            border-violet-500/40
            shadow-[0_0_30px_rgba(139,92,246,0.3)]
            hover:scale-105
            transition-all
            duration-500
          "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
