export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black opacity-70 flex flex-row justify-between items-center p-2 z-50">
      <div className="ml-8">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="flex flex-row space-x-2 mr-8">
        <a
          className="text-white font-extralight text-xl"
          href="mailto:anujshrivastava982@gmail.com"
        >
          Contact
        </a>
      </div>
    </div>
  );
};
