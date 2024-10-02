export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black opacity-70 flex flex-row justify-between items-center p-2 z-50">
      <div className="ml-2 md:ml-8">
        <img src="/logo.png" alt="Logo" 
        className="w-40 sm:w-48"
        />
      </div>
      <div className="flex flex-row space-x-2 mr-2 sm:mr-6 md:mr-8 lg:mr-10">
        <a
          className="text-white text-xs sm:text-xl"
          href="mailto:anujshrivastava982@gmail.com"
        >
          Contact
        </a>
      </div>
    </div>
  );
};
