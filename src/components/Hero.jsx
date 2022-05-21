import Button from "./shared/Button";
import links from "./shared/links.json";
import ProfilePic from "../assets/profile_pic.jpg";

function Hero() {
  return (
    <div className="flex flex-col h-3/4">
      <div className="flex flex-row justify-between items-center">
        <div className="2xl:w-1/2 flex flex-col space-y-2 mb-4 tracking-tighter">
          <span className="font-extrabold text-xl xl:text-2xl bg-clip-text text-transparent gradient-teal-to-sky">
            Hi, I'm
          </span>
          <span className="font-extrabold text-3xl xl:text-7xl bg-clip-text text-transparent gradient-teal-to-sky">
            Nicholas Steven Darmawan.
          </span>
          <span className="font-firacode font-regular text-lg xl:text-xl lg:text-2xl text-slate-500">
            I am a Software Engineer with a passion for building things that
            help the world work.
          </span>
        </div>
        <div className="hidden 2xl:flex">
          <img
            className="inline-block h-80 w-80 rounded-full"
            src={ProfilePic}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-row pt-4">
        <div className="mr-4">
          <Button link={links.linkedin} text={"LinkedIn"} />
        </div>
        <div>
          <Button link={links.github} text={"GitHub"} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
