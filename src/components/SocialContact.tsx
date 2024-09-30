import { ImGithub, ImLinkedin } from "react-icons/im";
import { AiOutlineX } from "react-icons/ai";


export const SocialContact = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex justify-center items-center flex-row mt-28 space-x-10">
        <a href="https://github.com/Anuj0609">
          <ImGithub />
        </a>
        <a href="https://www.linkedin.com/in/anuj-shrivastava-063980b1/">
          <ImLinkedin />
        </a>
        <a href="https://x.com/anujshr17835959">
          <AiOutlineX />
        </a>
      </div>
      <p>Created with &#10084;&#65039; using Next.js</p>
    </div>
  );
};
