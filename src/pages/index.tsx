import { Navbar } from "@/components/Navbar";
import { Details } from "@/components/Details";
import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { SocialContact } from "@/components/SocialContact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Details />
      <AboutMe />
      <Experience />
      <Projects />
      <SocialContact/>
    </div>
  );
}
