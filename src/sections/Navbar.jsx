import { useState, useEffect } from "react";
import {
  IoSunnyOutline,
  IoMoonOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";

// Links for navbar section
const navLinks = [
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Implement scroll spy to highlight active section in navbar using viewport center detection
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;

        // Check if section is near center of viewport
        if (
          sectionTop <= window.innerHeight / 2 &&
          sectionTop + sectionHeight >= window.innerHeight / 2
        ) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-8 h-14 md:h-16">
        {/* Portfolio logo name */}
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 transition-colors duration-300 ease-in-out cursor-pointer hover:opacity-80">
          <a href="#hero">Utheshini Uthayananth</a>
        </h1>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-x-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.id}`}
                className={`relative transition-colors duration-300
                  ${
                    activeSection === link.id
                      ? "text-color-primary dark:text-indigo-400 font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300"
                      : "text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300"
                  }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-x-4">
          {/* Theme toggle button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-1 md:p-2 text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 ease-in-out 
            cursor-pointer hover:opacity-80"
          >
            {theme === "light" ? (
              <IoMoonOutline className="w-4 h-4" />
            ) : (
              <IoSunnyOutline className="w-4 h-4" />
            )}
          </button>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden"
          >
            {isMenuOpen ? (
              <IoCloseOutline className="w-4 h-4 text-gray-700 dark:text-gray-200" />
            ) : (
              <IoMenuOutline className="w-4 h-4 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Show nav links if mobile menu is opened */}
      {isMenuOpen && (
        <ul className="md:hidden px-4 pb-4 gap-y-4 bg-white dark:bg-gray-900 shadow-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`relative transition-colors duration-300
                  ${
                    activeSection === link.id
                      ? "text-indigo-600 dark:text-indigo-400 font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300"
                      : "text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300"
                  }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
