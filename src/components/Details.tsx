import { motion } from "framer-motion";

export const Details = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 space-y-4">
      {/* Profile Image */}
      <motion.img
        src="/me.png"
        alt="Profile"
        className="w-40 h-40 md:w-[231px] md:h-[231px] rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <div className="flex justify-center flex-col items-center space-y-2 md:space-y-6 mt-3">
        {/* Name */}
        <motion.div
          className="font-semibold gap-6 mt-4 text-3xl md:text-6xl font-poppins"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          ANUJ SHRIVASTAVA!
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="text-sm md:text-xl font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          I do Code &{" "}
          <span className="text-transparent font-light pb-1 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-xl">
            Chill
          </span>{" "}
          🍿
        </motion.div>

        {/* Updated Description */}
        <motion.p
          className="px-5 text-sm md:w-[600px] text-center text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Passionate <span className="text-yellow-400">Frontend Developer</span>
          specializing in <span className="text-cyan-400">React</span> and{" "}
          <span className="text-cyan-400">Next.js</span>. I build elegant, fast,
          and user-friendly web experiences that delight users and elevate
          brands. Always exploring modern tools and best practices to craft
          seamless and interactive interfaces.
        </motion.p>

        {/* Contact Me Button */}
        <motion.a
          href="mailto:anujshrivastava982@gmail.com"
          className="border border-gray-500 p-2 text-sm md:text-xl md:py-2 md:px-6 m-4 rounded-3xl hover:bg-white hover:text-black hover:scale-110 ease-in-out transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Contact Me
        </motion.a>
      </div>
    </div>
  );
};
