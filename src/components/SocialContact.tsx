import { ImGithub, ImLinkedin } from "react-icons/im";
import { AiOutlineX } from "react-icons/ai";
import { motion } from "framer-motion";

export const SocialContact = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Social Icons */}
      <motion.div
        className="flex justify-center items-center flex-row mt-28 space-x-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <a
          href="https://github.com/Anuj0609"
          target="_blank"
          className="text-3xl text-gray-400 hover:text-white transition transform hover:scale-125 hover:rotate-6"
        >
          <ImGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/anuj-shrivastava-063980b1/"
          target="_blank"
          className="text-3xl text-gray-400 hover:text-blue-500 transition transform hover:scale-125 hover:-rotate-6"
        >
          <ImLinkedin />
        </a>
        <a
          href="https://x.com/anujshr17835959"
          target="_blank"
          className="text-3xl text-gray-400 hover:text-gray-200 transition transform hover:scale-125 hover:rotate-6"
        >
          <AiOutlineX />
        </a>
      </motion.div>

      {/* Footer Text */}
      <motion.p
        className="text-sm text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Created with <span className="text-red-500">&#10084;&#65039;</span>{" "}
        using Next.js
      </motion.p>
    </div>
  );
};
