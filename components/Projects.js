import React from "react";
import Link from "next/link";
import userData from "@constants/data";

export default function Projects({ projects }) {
  return (
    <section className="bg-white dark:bg-stone-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-stone-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      {/* dynamic linking of projects */}
      <div className="bg-[#F1F1F1] dark:bg-stone-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {projects.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              link={proj.link}
              thumbURL={proj.thumbURL}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, thumbURL, number }) => {
  return (
    <Link href={`/projects/${encodeURIComponent(title.replace(/\s+/g, '-'))}`} className="w-full block shadow-2xl">
      
        <div className="relative overflow-hidden">
          <div className="h-72 object-cover">
            <img
              src={thumbURL}
              alt="portfolio"
              className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
            />
          </div>
          <h1 className="absolute top-10 left-10 text-stone-50 font-bold text-xl bg-red-500 rounded-md px-2">
            {title}
          </h1>
          <h1 className="absolute bottom-10 left-10 text-stone-50 font-bold text-xl">
            {number.length === 1 ? "0" + number : number}
          </h1>
        </div>
      
    </Link>
  );
};
