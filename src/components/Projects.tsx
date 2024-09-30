export const Projects = () => {
  const itemsArray = [
    {
      image: "/climecast.png",
      name: "WeatherApp",
      description:
        "Developed a user-friendly weather app featuring an intuitive interface and integrated blog, utilizing Next.js for seamless performance.",
    },
    {
      image: "/todolist.png",
      name: "To-Do App",
      description:
        "Developed a user-friendly to-do app using Next.js that allows users to create, edit, and delete tasks, helping them stay organized and boost productivity.",
    },
  ];

  return (
    <div className="flex justify-center flex-col items-center mt-28">
      <div className="font-semibold text-6xl">PROJECTS</div>
      <div className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-red-600 to-cyan-500 text-xl">
        EXPLORE NOW
      </div>

      <div className="flex flex-row justify-center flex-wrap w-1/2">
        {itemsArray.map((item, index) => (
          <div key={index} className="m-4 p-4 flex flex-row  ">
            <img
              src={item.image}
              alt={item.name}
              className="w-[150px] h-[150px] border border-sm border-gray-500 rounded-lg"
            />
            <div className="flex flex-col space-y-3 ml-4 mt-4 ">
              <div className="font-bold text-2xl shadow text-gray-400">
                {item.name}
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
