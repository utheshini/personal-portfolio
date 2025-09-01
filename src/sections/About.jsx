import illustration from "../assets/illustration.png";

function About() {
  return (
    <section id="about" className="px-6 py-20 bg-gray-50 dark:bg-gray-800">
      <div className="grid md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto ">
        {/* Illustration */}
        <div className="hidden md:flex md:justify-start">
          <div className="relative">
            <img
              src={illustration}
              alt="About Illustration"
              loading="lazy"
              className="md:w-72 md:h-72 border-4 border-indigo-600 dark:border-indigo-400 rounded-full shadow-2xl object-cover"
            />
            <div className="absolute -inset-2 bg-indigo-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* About Text */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
            Hello! I'm{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Utheshini Uthayananth
            </span>
            , a passionate{" "}
            <span className="font-medium">frontend developer </span>
            with experience building modern, responsive web applications using
            <span className="font-medium"> React</span> and{" "}
            <span className="font-medium">Tailwind CSS</span>. I enjoy creating
            intuitive user interfaces and turning ideas into clean, functional
            code.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
            As a fresher, I'm constantly learning and improving my skills while
            building real-world projects. My goal is to contribute to teams
            where I can deliver impactful user experiences and grow as a
            developer.
          </p>

          {/* CTA button to navigate to Contact section */}
          <a
            href="#contact"
            className="inline-block px-6 py-3 text-white font-medium bg-indigo-600 rounded-xl 
            transition-colors duration-300 ease-in-out hover:bg-indigo-700"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
