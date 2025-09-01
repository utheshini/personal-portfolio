import SkillTag from "../components/SkillTag";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

// List of skills
const skills = [
  { name: "HTML5", icon: <FaHtml5 className="w-10 h-10 text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="w-10 h-10 text-blue-500" /> },
  {
    name: "JavaScript",
    icon: <FaJs className="w-10 h-10 text-yellow-400" />,
  },
  { name: "React", icon: <FaReact className="w-10 h-10 text-cyan-400" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-10 h-10 text-sky-400" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="w-10 h-10 text-gray-800 dark:text-gray-200" />,
  },
];

function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white">
          Skills
        </h2>

        {/* Grid of skill tags */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillTag key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
