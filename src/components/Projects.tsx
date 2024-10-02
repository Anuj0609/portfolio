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
  ];

  return (
    <div className="flex justify-center flex-col items-center mt-28 w-full">
      <div className="font-semibold text-3xl md:text-6xl">PROJECTS</div>
      <div className="text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-red-600 to-cyan-500 text-sm">
        EXPLORE NOW
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-start flex-wrap md:w-1/2 w-full">
        {itemsArray.map((item, index) => (
          <a
            key={index}
            className="m-4 p-4 flex flex-row"
            href={item.link}
            target="_blank"
          >
            <div
              className=" w-36 h-36 min-w-36 min-h-36 md:min-w-48 md:min-h-48 md:w-48 md:h-48 border border-sm border-gray-500 rounded-lg overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              {/* <img src={item.image} alt={item.name} className="w-full h-full" /> */}
            </div>
            <div className="flex flex-col space-y-3 ml-4 md:mt-4 ">
              <div className="font-bold text-xl md:text-2xl shadow text-gray-400">
                {item.name}
              </div>
              <p className="text-xs">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
