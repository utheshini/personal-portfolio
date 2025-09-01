import { useState, useEffect } from "react";
import {
  IoSunnyOutline,
  IoMoonOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";

// Links for navbar section
const navLinks = [
  { name: "Skills", to: "#skills" },
  { name: "Projects", to: "#projects" },
  { name: "About", to: "#about" },
  { name: "Contact", to: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Theme persisted in localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Persist theme in localStorage and update document class
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center justify-between max-w-6xl h-16 mx-auto px-4">
        {/* Portfolio logo name */}
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 transition-colors duration-300 ease-in-out cursor-pointer hover:opacity-80">
          <a href="#hero">Utheshini Uthayananth</a>
        </h1>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-x-4">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="text-gray-700 dark:text-gray-200 transition-colors duration-300 ease-in-out cursor-pointer 
              hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <a href={link.to}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-x-4">
          {/* Theme toggle button */}
          <button
            type="button"
            aria-label="Toggle Dark Mode"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 ease-in-out 
            cursor-pointer hover:opacity-80"
          >
            {theme === "light" ? (
              <IoMoonOutline className="w-6 h-6" />
            ) : (
              <IoSunnyOutline className="w-6 h-6" />
            )}
          </button>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <IoCloseOutline className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <IoMenuOutline className="w-6 h-6 text-gray-700 dark:text-gray-200" />
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
                href={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 dark:text-gray-200 transition-colors duration-300 ease-in-out cursor-pointer 
                hover:text-indigo-600 dark:hover:text-indigo-400"
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
