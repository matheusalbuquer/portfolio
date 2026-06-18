import logo from "../../assets/imgs/lugu.png";
import { FaDownload } from "react-icons/fa";

function Navbar() {
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

      <div className="flex gap-6 justify-center">
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
