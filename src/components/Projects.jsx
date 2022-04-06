import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import ProjectList from "../content/projects.md";

function Projects() {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch(ProjectList)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="py-16 flex flex-col">
      <div className="flex flex-col mb-16">
        <span className="font-firacode text-teal-600 text-lg lg:text-xl mb-2">
          02
        </span>
        <span className="text-3xl lg:pb-4 lg:text-7xl bg-clip-text text-transparent gradient-teal-to-sky font-extrabold tracking-tighter">
          Projects
        </span>
      </div>
      <article className="prose tracking-tighter text-md lg:text-xl text-slate-500 font-firacode">
        <ReactMarkdown linkTarget="_blank" children={content} />
      </article>
    </div>
  );
}

export default Projects;
