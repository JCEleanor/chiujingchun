import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    imageSrc: "/yelp-camp.png",
    imageAlt: "Yelp Camp Preview",
    repoLink: "https://github.com/JCEleanor/yelp-camp",
    projectTitle: "Yelp Camp - June 2021",
    projectDescription:
      "Yelp camp is a full stack web app implementing the MERN stack, and is inspired by Yelp.",
    skills: [
      "Next.js",
      "Tailwind",
      "MongoDB",
      "Mongoose",
      "Express",
      "Node.js",
    ],
  },
  {
    imageSrc: "/personal-site.png",
    imageAlt: "My personal website v1.0",
    repoLink: "https://github.com/JCEleanor/mywebsite",
    projectTitle: "Personal Website - June 2021",
    projectDescription: "My first personal website deployed with github pages.",
    skills: ["React", "styled-components"],
  },
  {
    imageSrc: "/watermark.jpg",
    imageAlt: "watermark generator sample img",
    repoLink: "https://github.com/JCEleanor/watermark-generator",
    projectTitle: "Watermark Generator - May 2021",
    projectDescription:
      "A watermark generator that allows users to add watermarks in desired positions.",
    skills: ["Python", "Pillow"],
  },
  {
    imageSrc: "/insta-clone.png",
    imageAlt: "Instagram Clone",
    repoLink: "https://web.ntnu.edu.tw/~40521207l/photoblog/index.html",
    projectTitle: "Instagram Clone - April 2021",
    projectDescription: "An instagram clone as well as my photo blog project.",
    skills: ["Vanilla JavaScript", "Vanilla CSS", "HTML"],
  },
];

export const ProjectSection = () => {
  return (
    <section className="mt-20 scroll-mt-32" id="PROJECTS">
      {data.map((p) => (
        <div key={p.repoLink} className="flex gap-4 mt-10">
          <Image
            width={250}
            height={150}
            className="rounded-lg"
            src={p.imageSrc}
            alt={p.imageAlt}
          />
          <div className="flex flex-col justify-between">
            <div>
              <Link href={p.repoLink as string}>
                <h3 className="text-xl font-semibold hover:text-neutral-100">
                  {p.projectTitle}
                </h3>
              </Link>
              <p>
                {/* dangerouslySetInnerHTML? */}
                {p.projectDescription}
              </p>
            </div>
            <div className="flex gap-1">
              {p.skills.map((skill) => (
                <div
                  key={skill}
                  className="p-2 border text-xs rounded-full text-white"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
