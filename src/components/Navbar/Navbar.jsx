import logo from "../../assets/imgs/lugu.png";
import { FaDownload } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      id="inicio"
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between h-16 bg-gray-900 text-white px-4"
    >
      <div className="flex justify-start gap-2">
        <img src={logo} alt="Logo" className="h-8 w-10 md:h-10 md:w-12" />
        <h3 className="hidden md:block text-lg font-bold mt-1">
          Matheus Albuquerque
        </h3>
      </div>
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {menuOpen && (
        <div
          className="
      absolute
      top-16
      left-0
      w-full
      bg-slate-900
      border-t
      border-violet-500/20
      flex
      flex-col
      items-center
      py-6
      gap-5
      md:hidden
    "
        >
          <a href="#hero">Início</a>

          <a href="#projects">Projetos</a>

          <a href="#technologies">Tecnologias</a>

          <a href="#footer">Contato</a>

          <a
            href="/curriculum.pdf"
            download
            className="
        bg-violet-500
        px-4
        py-2
        rounded-lg
        flex
        items-center
        gap-2
      "
          >
            <FaDownload />
            Baixar Currículo
          </a>
        </div>
      )}
      <div className="hidden md:flex gap-6 justify-center">
        <a
          href="#hero"
          className="relative transition-all duration-300 hover:text-violet-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
        >
          Início
        </a>

        <a
          href="#projects"
          className="relative transition-all duration-300 hover:text-violet-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
        >
          Projetos
        </a>

        <a
          href="#technologies"
          className="relative transition-all duration-300 hover:text-violet-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
        >
          Tecnologias
        </a>

        <a
          href="#footer"
          className="relative transition-all duration-300 hover:text-violet-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
        >
          Contato
        </a>
      </div>
      <div className="hidden md:flex justify-end">
        <a
          className="bg-violet-500 hover:bg-violet-600 flex items-center text-white font-bold py-2 px-2 rounded"
          href="/curriculum.pdf"
          download
        >
          <FaDownload size={14} className="mr-2" />
          Baixar currículo
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
