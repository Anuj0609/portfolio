import { useEffect, useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex flex-row justify-between items-center p-2 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 shadow-lg" : "bg-black/70"
      }`}
    >
      {/* Logo */}
      <div className="ml-2 md:ml-8">
        <img src="/logo.png" alt="Logo" className="w-40 sm:w-48" />
      </div>

      {/* Links */}
      <div className="flex flex-row items-center space-x-4 mr-2 sm:mr-6 md:mr-8 lg:mr-10">
        {/* Contact */}
        <a
          className="text-white text-xs sm:text-xl hover:text-yellow-400 transition-colors duration-300"
          href="mailto:anujshrivastava982@gmail.com"
        >
          Contact
        </a>

        {/* Resume Download */}
        <a
          className="flex items-center text-white text-xs sm:text-xl hover:text-green-400 transition-colors duration-300"
          href="/Anuj_Lal_Shrivastava_Frontend_Developer_Resume.pdf" // Make sure your resume is in public folder
          download
        >
          <HiOutlineDownload className="mr-1" /> Resume
        </a>
      </div>
    </div>
  );
};
