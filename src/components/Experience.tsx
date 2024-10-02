import { Pill } from "./Pill";

export const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 space-y-1">
      <div className="font-semibold text-3xl md:text-6xl">EXPERIENCE</div>
      <div className="text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 text-sl">
        EXPLORE NOW
      </div>
      <p className="px-5 text-sm md:w-[770px] text-center">
        I have been working as a Freelance Frontend Developer, where I’ve built
        responsive web applications using HTML, CSS, JavaScript, React, and
        Next.js. I’ve successfully developed projects like a weather app and a
        to-do list application, focusing on creating user-friendly interfaces
        and optimizing performance.
        <br />
        <br />
        By leveraging modern web frameworks like Tailwind CSS, I’ve ensured
        design consistency and responsiveness across different devices. My
        freelance work has allowed me to work directly with clients, gather
        requirements, and deliver solutions that enhance usability and exceed
        expectations.
      </p>
      <div className="flex md:justify-center md:flex-row flex-col gap-6">
        <Pill>JavaScript</Pill>
        <Pill>Tailwind CSS</Pill>
        <Pill>React.js</Pill>
        <Pill>Next.js</Pill>
      </div>
    </div>
  );
};
