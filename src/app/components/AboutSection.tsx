import React from "react";

const AboutSection = () => {
  return (
    <section id="ABOUT" className="scroll-mt-32">
      <p className="mb-2">
        Rewind to 2020, amidst the chaotic pandemic, I made a pivotal decision
        to pursue a career in software engineering. Until this day, the creative
        process of visualizing infomation, data or ideas into something
        meaningful or concrete still facsinates me.
      </p>

      <p className="mb-2">
        Throughout the course of my career, I have contributed to many
        applications—from content management systems, landing pages for
        <a
          className="text-neutral-100"
          href="https://24h.pchome.com.tw/"
          target="_blank"
          rel="noreferrer"
          title="PChome 24H"
        >
          &nbsp;e-commerce site&nbsp;
        </a>
        to interfaces for
        <span className="text-neutral-100"> kiosk machines </span>using
        technologies like
        <span className="text-cyan-400"> ReactJS </span>,
        <span className="text-emerald-400"> NextJS</span>,
        <span className="text-violet-400"> Typescript</span>,
        <span className="text-fuchsia-400"> TailwinsCSS </span>and
        <span className="text-amber-400"> Nodejs</span>, and many more.
      </p>

      <p className="mb-2">
        I like to think of myself as software—constantly iterating, evolving
        with each version. Every cycle of growth is both a milestone and the
        start of something new.
      </p>
      <p>
        When I am not at the computer, my interest is climbing and hiking.
        Lately I have been wanting to try trail running as well.
      </p>
    </section>
  );
};

export default AboutSection;
