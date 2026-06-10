import foto from "../../assets/imgs/minha-foto.png";

function Hero() {
  return (
    <section className="bg-gradient-to-br flex items-center justify-between from-slate-950 via-slate-900 to-violet-900 text-white py-16">
      <div className="container mx-auto px-4">
        <p className="text-left text-sm uppercase font-bold text-violet-500 tracking-widest mb-2">
          Olá, eu sou
        </p>
        <h1 className="text-4xl font-bold text-left  mb-4">
          Matheus Albuquerque
        </h1>
        <h4 className="text-lg text-left mb-8">
          Sou um desenvolvedor full-stack apaixonado por criar soluções
          inovadoras.
        </h4>

        <img
          src={foto}
          alt="Matheus Albuquerque"
          className="w-80 h-96 object-cover justify-left rounded-2xl border border-violet-500/30"
        />
        <p className="text-left max-w-2xl  text-gray-300 mb-">
          Formado em Análise e Desenvolvimento de Sistemas, tenho experiência em
          diversas tecnologias, incluindo Java, Spring Boot, JavaScript, React,
          Node.js e Python. Meu objetivo é transformar ideias em realidade por
          meio do código.
        </p>
      </div>
    </section>
  );
}

export default Hero;
