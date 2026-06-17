import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="bg-[#081426] py-8
     text-white"
    >
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Coluna 1 */}
          <div>
            <h3 className="font-bold text-xl mb-4">Vamos conversar?</h3>

            <p className="text-gray-400 text-sm leading-6">
              Estou sempre aberto a novas oportunidades e projetos
              interessantes.
            </p>
          </div>

          {/* Coluna 2 */}
          <div>
            <h4 className="font-medium mb-3">E-mail</h4>

            <p className="text-gray-400 text-sm">mj898926@gmail.com</p>
          </div>

          {/* Coluna 3 */}
          <div>
            <h4 className="font-medium mb-3">WhatsApp</h4>

            <p className="text-gray-400 text-sm">(81) 98422-0414</p>
          </div>

          {/* Coluna 4 */}
          <div>
            <h4 className="font-medium mb-3">Localização</h4>

            <p className="text-gray-400 text-sm">Pernambuco, Brasil</p>
          </div>

          {/* Coluna 5 */}
          <div>
            <h4 className="font-medium mb-3">Redes Sociais</h4>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/matheus-albuquerque-4512bb264/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/matheusalbuquer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/matheus_aalbuquerque_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
