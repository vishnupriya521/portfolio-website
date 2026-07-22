function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold">
          Vishnupriya
        </h2>

        <p className="text-gray-400 mt-2">
          Computer Science Student | Full Stack Developer
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-blue-400"
          >
            Email
          </a>
        </div>

        <p className="text-gray-500 mt-8 text-sm">
          © 2026 Vishnupriya. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;