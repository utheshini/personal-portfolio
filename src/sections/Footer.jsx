function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 text-sm text-center text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <p>© {currentYear} Utheshini Uthayananth.</p>
        <p className="mt-2">Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}

export default Footer;
