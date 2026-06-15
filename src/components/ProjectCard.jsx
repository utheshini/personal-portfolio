import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Reusable project card component
function ProjectCard({ title, description, image, tech, demo, github }) {
  return (
    <article
      className="flex flex-col h-full bg-gray-50 dark:bg-gray-800 rounded-2xl border border-transparent 
      shadow-sm transition duration-300 ease-in-out over:shadow-md hover:border-indigo-500/70"
    >
      <img
        src={image}
        alt={`Screenshot of ${title} project UI`}
        className="w-full aspect-video object-cover"
      />

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="flex-1 mt-2 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>

        {/* Tech stack tags */}
        <ul className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <li
              key={t}
              className="px-3 py-1 text-xs font-medium text-indigo-700 
              dark:text-indigo-100 bg-indigo-100 dark:bg-indigo-700 rounded-full"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Live Demo + GitHub links*/}
        <div className="flex gap-4 mt-6">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo of project"
              className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium bg-indigo-600 rounded-lg 
              transition-colors duration-300 ease-in-out  hover:bg-indigo-700"
            >
              Live Demo <FaExternalLinkAlt />
            </a>
          )}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
            className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded-lg 
            transition-colors duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
