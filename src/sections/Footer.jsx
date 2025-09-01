function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 text-xs md:text-sm text-center text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-950">
      <p>&copy; {currentYear} Utheshini Uthayananth.</p>
      <p className="mt-2">Built with ❤️ React & Tailwind CSS.</p>
    </footer>
  );
}

export default Footer;
