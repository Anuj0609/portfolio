export const Details = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 space-y-4">
      <img
        src="/me.png"
        alt=""
        className="w-40 h-40 md:w-[231px] md:h-[231px] rounded-full "
      />
      <div className="flex justify-center flex-col items-center space-y-2 md:space-y-6 mt-3">
        <div className="font-semibold gap-6 mt-4 text-3xl md:text-6xl font-poppins">
          ANUJ SHRIVASTAVA!
        </div>
        <div className=" text-sm md:text-xl font-medium">
          I do Code &{" "}
          <span className="text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
            Chill
          </span>
          🍿
        </div>
        <p className=" px-5 text-sm md:w-[600px] text-center">
          Passionate Frontend Developer with a focus on React-based web
          applications, dedicated to crafting elegant and user-friendly websites
          and applications.
        </p>
        <a
          href="mailto:anujshrivastava982@gmail.com"
          className="border border-gray-500 p-2 text-sm md:text-xl md:py-2 md:px-6 m-4 rounded-3xl hover:bg-white hover:text-black hover:scale-110 ease-in-out transition-all duration-300"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};
