import { GoArrowRight } from "react-icons/go";
import illustration from "../assets/illustration.png";

function Hero() {
  return (
    <section
      id="hero"
      className="flex items-center justify-center min-h-screen px-6 bg-white dark:bg-gray-900"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="space-y-6 text-center md:text-left">
          {/* Intro text */}
          <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
            Hi, I’m Utheshini Uthayananth 👋
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Frontend Developer <br />
            <span className="text-indigo-600 dark:text-indigo-400">
              React & Tailwind Enthusiast
            </span>
          </h1>

          <p className="max-w-lg mx-auto text-gray-600 dark:text-gray-300">
            I build modern, responsive, and user-friendly web applications.
            Passionate about turning ideas into beautiful, functional products.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            {/* CTA button to scroll to Projects section */}
            <a
              href="#projects"
              aria-label="View my projects section"
              className="inline-flex items-center justify-center px-6 py-3 text-white font-medium bg-indigo-600 rounded-xl 
              transition-colors duration-300 ease-in-out hover:bg-indigo-700"
            >
              View Projects
              <GoArrowRight className="w-5 h-5 ml-2" />
            </a>

            {/* CTA button to open resume in new tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View my resume"
              className="inline-flex items-center justify-center px-6 py-3 text-gray-700 dark:text-gray-200 font-medium border border-gray-300 dark:border-gray-700 rounded-xl 
              transition-colors duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <img
              src={illustration}
              alt="Profile Illustration"
              className="w-64 h-64 border-4 border-indigo-600 dark:border-indigo-400 rounded-full shadow-2xl object-cover"
            />
            {/* Glow Effect around the illustration */}
            <div className="absolute -inset-2 bg-indigo-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
