export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between mx-6 my-6 h-7 items-center">
      <div className="ml-8">
        <img src="/logo.png" alt="" />
      </div>
      <div className="flex flex-row space-x-2 mr-8">
        <a
          className=" text-white font-extralight mr-8 text-xl"
          href="mailto:anujshrivastava982@gmail.com"
        >
          Contact
        </a>
      </div>
    </div>
  );
};
