// Reusable skill tag component
function SkillTag({ icon, name }) {
  return (
    <div
      className="flex flex-col items-center justify-center space-y-2 p-6 bg-white dark:bg-gray-900 rounded-xl 
      shadow transition duration-300 ease-in-out hover:shadow-lg dark:hover:border dark:hover:border-indigo-500/40"
    >
      {icon}
      <p className="text-gray-700 dark:text-gray-200 font-medium">{name}</p>
    </div>
  );
}

export default SkillTag;
