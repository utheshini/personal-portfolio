import { CiMail, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          Let’s Connect
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
          I’m open to internship and entry-level job opportunities. Whether you have a
          question, want to collaborate, or just say hi, I’d love to hear from
          you!
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="mailto:utheshini10@gmail.com"
            aria-label="Send me an email"
            className=" p-4 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-full shadow-lg 
            transition duration-300 ease-in-out hover:scale-110"
          >
            <CiMail className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/utheshini-uthayananth"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="p-4 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-full shadow-lg 
            transition duration-300 ease-in-out hover:scale-110"
          >
            <CiLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/utheshini"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="p-4 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-full shadow-lg
            transition duration-300 ease-in-out hover:scale-110"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
