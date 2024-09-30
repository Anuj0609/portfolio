export const Details = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 space-y-4">
      <img src="/me.png" alt="" className="w-[231px] h-[231px] rounded-full " />
      <div className="flex justify-center flex-col items-center space-y-1 mt-3">
        <div className="ont-semibold gap-6 mt-10 text-6xl font-poppins">
          ANUJ SHRIVASTAVA!
        </div>
        <div className="text-xl font-medium">
          I do Code &{" "}
          <span className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
            Chill
          </span>{" "}
          🍿
        </div>
        <p className="w-[600px] text-center">
          Passionate Frontend Developer with a focus on React-based web
          applications, dedicated to crafting elegant and user-friendly websites
          and applications.
        </p>
        <a
          href="mailto:anujshrivastava982@gmail.com"
          className="border border-gray-500 py-2 px-6 mt-6 rounded-3xl font-semibold"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};
