import logo from "../../assets/imgs/lugu.png";
import { FaDownload } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex items-center justify-between h-16 bg-gray-900 text-white px-4">
      <div className="flex justify-start gap-2">
        <img src={logo} alt="Logo" className="h-10 w-12" />
        <h3 className="text-lg font-bold mt-1">Matheus Albuquerque</h3>
      </div>

      <div className="flex gap-6 justify-center">
        <a className=" hover:text-purple-300 " href="#home">
          Inicio
        </a>
        <a href="#Projects">Projetos</a>
        <a href="#Technologies">Tecnologias</a>
        <a href="#Contact">Contato</a>
      </div>

      <div className="flex justify-end">
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
