import { Navbar } from "@/components/Navbar";
import { Details } from "@/components/Details";
import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { SocialContact } from "@/components/SocialContact";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Layers */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {/* Gradient Waves */}
        <div className="absolute w-[200%] h-[200%] bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500 rounded-full animate-wave opacity-40 -top-32 -left-32"></div>
        <div className="absolute w-[200%] h-[200%] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-400 rounded-full animate-wave-reverse opacity-30 -bottom-32 -right-32"></div>

        {/* Floating Neon Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30 w-3 h-3 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          ></div>
        ))}
      </div>

      {/* Page Content */}
      <Navbar />
      <Details />
      <AboutMe />
      <Experience />
      <Projects />
      <SocialContact />
    </div>
  );
}
