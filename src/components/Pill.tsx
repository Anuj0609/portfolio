export const Pill = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-2 border-gray-800 px-6 py-1 rounded-2xl text-center">
      {children}
    </div>
  );
};
