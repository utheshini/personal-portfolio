import ProjectCard from "../components/ProjectCard";
import jobportalMockup from "../assets/projects/jobportal-mockup.png";
import portfolioMockup from "../assets/projects/portfolio-mockup.png";
import todoMockup from "../assets/projects/todo-mockup.png";

// List of portfolio projects
const projects = [
  {
    title: "Job Portal System",
    description:
      "A full-stack job portal where job seekers can apply for jobs and employers can manage postings.",
    image: jobportalMockup,
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demo: null,
    github: "https://github.com/utheshini/job-portal",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React and Tailwind CSS showcasing projects and skills.",
    image: portfolioMockup,
    tech: ["React", "Tailwind"],
    demo: "https://utheshini-uthayananth.vercel.app",
    github: "https://github.com/utheshini/personal-portfolio",
  },
  {
    title: "Todo App",
    description:
      "A task management app with categories, and priorities built using React, Tailwind CSS and Context API.",
    image: todoMockup,
    tech: ["React", "Tailwind"],
    demo: "https://utheshini.github.io/todo-app",
    github: "https://github.com/utheshini/todo-app",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        {/* Grid of project cards */}
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <li key={project.title} className="h-full">
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
