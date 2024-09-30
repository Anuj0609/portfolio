export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between mx-6 my-6 h-7 items-center">
      <div className="ml-8">
        <img src="/logo.png" alt="" />
      </div>
      <div className="flex flex-row space-x-2 mr-8">
        <button className="bg-black text-white px-2 rounded-lg py-1">
          About me
        </button>
        <button className="bg-white text-black border border-black px-2 py-1 rounded-lg">
          contact
        </button>
      </div>
    </div>
  );
};
