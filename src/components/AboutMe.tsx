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
        I am{" "}
        <span className="text-yellow-400 font-medium">Anuj Shrivastava</span>, a
        passionate{" "}
        <span className="text-green-400 font-medium">Frontend Developer</span>
        with a focus on <span className="text-cyan-400">React</span> and
        <span className="text-blue-400"> Next.js</span>. I specialize in
        creating
        <span className="text-pink-400">
          {" "}
          dynamic, responsive, and user-friendly web applications
        </span>
        , seamlessly blending <span className="text-purple-400">
          logic
        </span>{" "}
        with
        <span className="text-red-400"> creativity</span>.
        <br />
        <br />
        Over the past year, I have built projects like a
        <span className="text-green-400"> weather app</span>, a
        <span className="text-yellow-400"> to-do list app</span>, and several
        landing pages, focusing on{" "}
        <span className="text-cyan-400">performance optimization</span>,
        <span className="text-pink-400"> responsive design</span>, and
        <span className="text-blue-400"> intuitive interfaces</span>. By
        leveraging
        <span className="text-purple-400"> Tailwind CSS</span> and modern web
        technologies, I deliver polished, high-quality solutions that exceed
        expectations.
        <br />
        <br />I thrive on collaborating with clients, translating ideas into
        code, and constantly pushing the boundaries of what's possible in the{" "}
        <span className="text-red-400">frontend ecosystem</span>.
      </p>
    </div>
  );
};
