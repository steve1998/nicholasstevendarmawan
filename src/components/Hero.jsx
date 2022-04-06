import Button from "./shared/Button";
import links from "./shared/links.json";

function Hero() {
  return (
    <div className="flex flex-col h-3/4">
      <div className="flex flex-col space-y-2 mb-4 tracking-tighter">
        <span className="font-extrabold text-xl lg:text-2xl bg-clip-text text-transparent gradient-teal-to-sky">
          Hi, I'm
        </span>
        <span className="font-extrabold text-3xl lg:text-8xl bg-clip-text text-transparent gradient-teal-to-sky">
          Nicholas Steven Darmawan.
        </span>
        <span className="font-firacode font-regular text-lg lg:text-xl lg:text-2xl text-slate-500">
          I am a Software Engineer with a passion for building things that help
          the world work.
        </span>
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
