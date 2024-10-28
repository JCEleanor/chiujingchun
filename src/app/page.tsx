"use client";

import Image from "next/image";
import { useState } from "react";
import { CiLinkedin, CiInstagram, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const [hoverText, setHoverText] = useState<null | string>(null);
  return (
    <div className="grid grid-cols-2 gap-8">
      <div
        // FIXME: position not sticky
        className="my-20 flex flex-col justify-between sticky top-[8rem] h-[80vh]"
        // style={{ borderRight: "1px solid rgb(128, 128, 128, .2)" }}
      >
        <header>
          <div className="flex gap-6">
            <div className="rounded-full w-[60px] h-[60px] overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="profile"
                priority
                width={150}
                height={150}
              />
            </div>
            <div className="my-auto">
              <h1 className="text-4xl font-extrabold text-neutral-50">
                Chiu Jing Chun
              </h1>
              <h2 className="text-sm font-bold text-neutral-100">
                Software Engineer from Taiwan
              </h2>
            </div>
          </div>

          <p className="mt-12">Quick facts about me:</p>
          <ul
            role="list"
            className="marker:text-sky-400 list-disc list-inside mt-2"
          >
            <li>
              I am currently a senior software engineer
              <span className="hover:text-neutral-100">
                <a
                  href="https://www.shoalter.com/"
                  target="_blank"
                  rel="noreferrer"
                  title="Shoalter Technology"
                >
                  &nbsp;@Shoalter Technology
                </a>
              </span>
            </li>
            <li>I enjoy exploring new technologies</li>
            <li>I focus on web development (for now)</li>
            <li>I do not have a CS degree (yet)</li>
            <li>I used to hate running but now I run (mediocrely)</li>
          </ul>

          <nav className="mt-12 ml-auto">
            <a href="#ABOUT">
              <li>ABOUT</li>
            </a>
            <a href="#EXPERIENCE">
              <li>EXPERIENCE</li>
            </a>
            <a href="#PROJECTS">
              <li>PROJECTS</li>
            </a>
          </nav>
        </header>
        <div className=" flex gap-2 text-3xl items-center ">
          <a
            href="https://www.linkedin.com/in/jing-chun-chiu-4316b420b/"
            target="_blank"
            rel="noreferrer"
            title="linkedin"
          >
            <CiLinkedin
              className="hover:text-sky-400 cursor-pointer"
              onMouseLeave={() => {
                setHoverText(null);
              }}
              onMouseEnter={() => {
                setHoverText(`Let's connect!`);
              }}
            />
          </a>
          <a
            href="https://github.com/JCEleanor"
            target="_blank"
            rel="noreferrer"
            title="github"
          >
            <FaGithub
              className="hover:text-sky-400 cursor-pointer"
              onMouseLeave={() => {
                setHoverText(null);
              }}
              onMouseEnter={() => {
                setHoverText("not much going on lately _(:3」∠)_");
              }}
            />
          </a>
          <a
            href="mailto:crcky4826@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="mail"
          >
            <CiMail
              className="hover:text-sky-400 cursor-pointer"
              onMouseLeave={() => {
                setHoverText(null);
              }}
              onMouseEnter={() => {
                setHoverText("hit me up!");
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/chunchunclimb"
            target="_blank"
            rel="noreferrer"
            title="instagram"
          >
            <CiInstagram
              className="hover:text-sky-400 cursor-pointer"
              onMouseLeave={() => {
                setHoverText(null);
              }}
              onMouseEnter={() => {
                setHoverText("my boulder account just for fun :D");
              }}
            />
          </a>
          {!!hoverText && (
            <span className="text-sm text-sky-400 inline-block ml-3">
              {hoverText}
            </span>
          )}
          <span></span>
        </div>
      </div>

      <main className="pt-20">
        <section id="ABOUT" className="scroll-mt-24">
          <p className="mb-2">
            Rewind to 2020, amidst the chaotic pandemic, I made a pivotal
            decision to pursue a career in
            <span className="text-sky-400"> web development </span>. Until this
            day, the creative process of visualizing infomation, data or ideas
            into something meaningful or concrete still facsinates me.
          </p>

          <p className="mb-2">
            Throughout the course of my career, I have contributed to many
            applications—from content management systems, landing pages for
            e-commerce sites to interfaces for kiosk machines using technologies
            like<span className="text-cyan-400"> ReactJS </span>,
            <span className="text-emerald-400"> NextJS</span>,
            <span className="text-violet-400"> Typescript</span>,
            <span className="text-fuchsia-400"> TailwinsCSS </span>and
            <span className="text-amber-400"> Nodejs</span>, and many more.
          </p>

          <p className="mb-2">
            I like to think of myself as software—constantly iterating, evolving
            with each version. Every cycle of growth is both an endpoint and the
            start of something new.
          </p>
          <p>
            When I am not at the computer, my interest is climbing and hiking.
            Lately I have been wanting to try trail running as well.
          </p>
        </section>

        <section className="h-[90vh] mt-24 scroll-mt-24" id="EXPERIENCE">
          EXPERIENCE
        </section>
        <section className="h-[90vh] mt-24 scroll-mt-24" id="PROJECTS">
          PROJECTS
        </section>
      </main>
    </div>
  );
}
