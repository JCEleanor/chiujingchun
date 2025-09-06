import React from "react";

const AboutSection = () => {
  return (
    <section id="ABOUT" className="scroll-mt-32">
      <p className="mb-2">
        Rewind to 2020, I pivoted to software engineering after getting my
        Bachelor&apos;s in English. To this day, the creative process of
        breaking down complex scenarios into actionable items still fascinates
        me, and this is where I see my value lies: not just in coding, but in
        <span className="text-neutral-100 font-bold cursor-pointer hover:text-amber-200">
          &nbsp;solving problems
        </span>
        .
      </p>
      <p className="mb-2">
        Throughout my career, I started as a full stack developer and gradually
        leaned towards frontend development, contributing to applications from
        landing pages for
        <a
          className="text-neutral-100"
          href="https://24h.pchome.com.tw/"
          target="_blank"
          rel="noreferrer"
          title="PChome 24H"
        >
          &nbsp;PChome&nbsp;
        </a>
        to interfaces for kiosk machines using
        <span className="text-emerald-400"> NextJS</span>,
        <span className="text-violet-400"> Typescript</span>,
        <span className="text-fuchsia-400"> TailwinsCSS</span>, and many more.
        Towards the end of my previous role, I bridged frontend development and
        <span className="text-amber-400"> DevOps</span>, writing
        <span className="text-indigo-400"> DockerFiles</span>,
        <span className="text-sky-400"> Kubernetes </span> config to optimize
        <span className="text-orange-400"> CI/CD </span>pipelines.
      </p>
      <p className="mb-2">
        I like to think of myself as software: constantly iterating, evolving
        with each version.
      </p>
      <p>
        When I&apos;m not at the computer, I enjoy climbing and hiking, and
        lately I&apos;ve been trying trail running as well.
      </p>
    </section>
  );
};

export default AboutSection;
