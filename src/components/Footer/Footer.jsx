function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Matheus Albuquerque. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
