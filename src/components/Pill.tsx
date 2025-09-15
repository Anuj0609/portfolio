export const Pill = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
        border-2 border-gray-800 
        px-6 py-1 
        rounded-2xl text-center md:mt-4
        cursor-pointer 
        transition-all duration-300 ease-in-out
        hover:border-pink-500 hover:text-pink-400
        hover:scale-110 hover:shadow-md hover:shadow-pink-500/30
        active:scale-95
      "
    >
      {children}
    </div>
  );
};
