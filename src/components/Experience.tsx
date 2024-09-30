export const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 space-y-1">
      <div className=" font-semibold text-6xl">EXPERIENCE</div>
      <div className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 text-xl">
        EXPLORE NOW
      </div>
      <p className="w-[770px] text-center">
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
      <div className="flex flex-row space-x-6">
     
        <div className="border border-gray-500 px-6 py-1 rounded-2xl">
          Tailwind CSS
        </div>
        <div className="border border-gray-500 px-6 py-1 rounded-2xl">
          JavaScript
        </div>
        <div className="border border-gray-500 px-6 py-1 rounded-2xl">
          React.js
        </div>
        <div className="border border-gray-500 px-6 py-1 rounded-2xl">
          Next.js
        </div>
        </div>
      </div>
  );
};
