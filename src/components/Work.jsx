import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import WorkExperience from "../content/work_experience.md";

function Work() {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch(WorkExperience)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="py-16">
      <div className="flex flex-col mb-16">
        <span className="font-firacode text-teal-600 text-lg lg:text-xl mb-2">
          01
        </span>
        <span className="pr-4 lg:pb-4 text-3xl lg:text-7xl bg-clip-text text-transparent gradient-teal-to-sky font-extrabold tracking-tighter">
          Work Experience
        </span>
      </div>
      <article className="prose tracking-tighter text-md lg:text-xl text-slate-500 font-firacode">
        <ReactMarkdown children={content} />
      </article>
    </div>
  );
}

export default Work;
