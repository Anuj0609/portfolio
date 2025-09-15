import { Pill } from "./Pill";

export const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 space-y-6">
      {/* Heading */}
      <div className="font-semibold text-3xl md:text-6xl animate-fade-in">
        EXPERIENCE
      </div>
      <div className="text-transparent font-light bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 text-sm animate-pulse">
        EXPLORE NOW
      </div>

      {/* Description */}
      <p className="px-5 text-sm md:w-[770px] text-center text-gray-300 leading-relaxed animate-fade-in-up">
        I have been working as a{" "}
        <span className="text-yellow-400 font-medium">
          Freelance Frontend Developer
        </span>
        , crafting <span className="text-pink-400">responsive</span> and
        <span className="text-cyan-400">
          {" "}
          interactive web applications
        </span>{" "}
        using
        <span className="text-blue-400"> HTML, CSS, JavaScript, React</span>,
        and
        <span className="text-blue-400"> Next.js</span>. My projects include a
        <span className="text-green-400"> weather app</span>, a
        <span className="text-purple-400"> to-do list app</span>, and several
        landing pages, all focused on{" "}
        <span className="text-pink-400">performance optimization</span>,
        <span className="text-cyan-400"> responsive design</span>, and
        <span className="text-yellow-400"> user-friendly interfaces</span>.
        <br />
        <br />
        By leveraging modern frameworks like{" "}
        <span className="text-purple-400">Tailwind CSS</span>
        and keeping up with best practices, I deliver solutions that are
        <span className="text-red-400"> polished, maintainable</span>, and
        <span className="text-green-400"> exceed client expectations</span>. I
        thrive on collaborating directly with clients, translating ideas into
        code, and creating
        <span className="text-pink-400"> seamless user experiences</span>.
      </p>

      {/* Skill Pills */}
      <div className="flex md:justify-center md:flex-row flex-col gap-6 mt-6">
        <Pill>JavaScript</Pill>
        <Pill>Tailwind CSS</Pill>
        <Pill>React.js</Pill>
        <Pill>Next.js</Pill>
      </div>
    </div>
  );
};
