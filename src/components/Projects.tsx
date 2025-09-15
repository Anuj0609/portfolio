export const Projects = () => {
  const itemsArray = [
    {
      image: "/climecast.png",
      name: "Clime Cast",
      description:
        "Developed a user-friendly weather app featuring an intuitive interface and integrated blog, utilizing Next.js for seamless performance.",
      link: "https://climecast.vercel.app/",
    },
    {
      image: "/todolist.png",
      name: "My Parcha",
      description:
        "Developed a user-friendly to-do app using Next.js that allows users to create, edit, and delete tasks, helping them stay organized and boost productivity.",
      link: "https://myparcha.vercel.app/",
    },
    {
      image: "/dealsup.png",
      name: "DealzUp",
      description:
        "Built a responsive e-commerce landing page with React and Tailwind CSS, ensuring fast loading, cross-device compatibility, and a clean UI for better engagement.",
      link: "https://dealzup-homes.vercel.app/",
    },
    {
      image: "/webbywolf.png",
      name: "Web by Wolf",
      description:
        "Designed and developed a modern landing page using Next.js and Tailwind CSS, focusing on smooth layout, responsive design, and performance optimization.",
      link: "https://webbywolf-landing-self.vercel.app/",
    },
  ];

  return (
    <div className="flex justify-center flex-col items-center mt-28 w-full">
      {/* Heading */}
      <div className="font-semibold text-3xl md:text-6xl">PROJECTS</div>
      <div className="text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-red-600 to-cyan-500 text-sm">
        EXPLORE NOW
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-3/4">
        {itemsArray.map((item, index) => (
          <a
            key={index}
            className="group p-5 rounded-2xl bg-gray-800/40 hover:bg-gray-800/60 hover:scale-105 transform transition duration-300 shadow-md hover:shadow-xl flex flex-col md:flex-row"
            href={item.link}
            target="_blank"
          >
            {/* Image */}
            <div
              className="w-full md:w-48 h-40 md:h-48 rounded-lg overflow-hidden bg-cover bg-center group-hover:scale-105 transition duration-300"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>

            {/* Content */}
            <div className="flex flex-col justify-center space-y-3 mt-4 md:mt-0 md:ml-6">
              <div className="font-bold text-xl md:text-2xl text-gray-200 group-hover:text-cyan-400 transition">
                {item.name}
              </div>
              <p className="text-sm text-gray-400 group-hover:text-gray-200 transition">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
