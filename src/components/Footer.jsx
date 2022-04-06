import links from "../components/shared/links.json";

function Footer() {
  return (
    <div className="text-slate-50 font-regular tracking-tighter font-firacode flex flex-col items-start px-8 lg:px-[420px] w-full py-8 lg:py-16 bg-teal-600">
      <div className="mb-8">
        <span className="underline underline-offset-4 lg:text-2xl text-xl">
          Get in Touch with Me
        </span>
      </div>
      <div className="flex flex-col mb-16">
        <a
          className="transition duration-200 hover:text-slate-300"
          href={`mailto:${links.email}`}
          target="_blank"
          rel={"noopener noreferrer"}
        >
          Email
        </a>
        <a
          className="transition duration-200 hover:text-slate-300"
          href={links.linkedin}
          target="_blank"
          rel={"noopener noreferrer"}
        >
          LinkedIn
        </a>
        <a
          className="transition duration-200 hover:text-slate-300"
          href={links.github}
          target="_blank"
          rel={"noopener noreferrer"}
        >
          GitHub
        </a>
      </div>
      <div className="flex flex-col">
        <span>
          Built with <b>React.js</b> and <b>Tailwind CSS.</b>
        </span>
        <span>
          Code on{" "}
          <a
            className="transition duration-200 hover:text-slate-300"
            href={links.website}
            target="_blank"
            rel={"noopener noreferrer"}
          >
            GitHub
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
