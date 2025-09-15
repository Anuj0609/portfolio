export const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12 md:mt-28 space-y-6">
      {/* Heading */}
      <h1 className="font-semibold text-3xl md:text-6xl font-poppins tracking-wide animate-fade-in">
        ABOUT ME
      </h1>
      <div className="text-transparent font-light bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 text-sm animate-pulse">
        EXPLORE NOW
      </div>

      {/* Description */}
      <p className="px-5 md:w-[720px] text-center text-sm md:text-base text-gray-300 leading-relaxed animate-fade-in-up">
        As a passionate{" "}
        <span className="text-green-400 font-medium">Software Engineer</span>, I
        thrive on the intricate dance between{" "}
        <span className="text-blue-400">logic</span> and{" "}
        <span className="text-pink-400">creativity</span>. Currently immersed in
        the dynamic world of web development, my expertise centers around{" "}
        <span className="text-yellow-400">React, Next.js</span>, and modern web
        technologies, where I seamlessly blend technology with innovation.
        <br />
        <br />
        With a fervor for crafting{" "}
        <span className="text-cyan-400">elegant solutions</span>, I navigate the
        ever-evolving landscape of software development. My journey involves
        translating concepts into code, creating{" "}
        <span className="text-pink-400">seamless user experiences</span>, and
        constantly pushing the boundaries of what&apos;s possible.
      </p>
    </div>
  );
};
