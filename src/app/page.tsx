"use client";

import Image from "next/image";
import { useState } from "react";
import { CiLinkedin, CiInstagram, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const [hoverText, setHoverText] = useState<null | string>(null);
  return (
    <div>
      <div className="flex flex-col justify-between top-[8rem] h-[80vh] fixed">
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
              Frontend focused software engineer
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
            <li>Bootcamp graduate, mostly self-taught</li>
            {/* https://cs50.harvard.edu/x/2025/ */}
            <li>Currently exploring CS fundamentals through CS50</li>
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
        <div className="flex gap-2 text-3xl items-center ">
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

      <main className="pt-20 ml-[50%]">
        <section id="ABOUT" className="scroll-mt-32">
          <p className="mb-2">
            Rewind to 2020, amidst the chaotic pandemic, I made a pivotal
            decision to pursue a career in software engineering. Until this day,
            the creative process of visualizing infomation, data or ideas into
            something meaningful or concrete still facsinates me.
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

        <section className="mt-20 scroll-mt-32" id="EXPERIENCE">
          {/* second experience */}
          <div>
            {/* <div className="ml-4"> */}
            <h3 className="text-xl font-semibold">
              Senior Software Engineer @Shoalter Technology
            </h3>
            <h6 className="font-thin italic">
              Sep 2022 - PRESENT (Prmoted Within 19 months)
            </h6>
            <div className="mt-4 space-y-3">
              <p>
                Lead development of three content management systems with React
                and Next for third-party logistics service, enabling real-time
                data visualization across five systems and supporting
                cross-functional teams in Hong Kong and Manchester.
              </p>
              <p>
                Establish industry standard CI/CD pipelines on Gitlab with tools
                such as Docker and kubernetes.
              </p>
              <p>
                Perform unit and end-to-end testing with Jest, Cypress, and Mock
                Service Worker, preventing regressions and improving development
                confidence during iterations.
              </p>
              <p>
                Improve developer experience by introducing emerging web
                technologies such as Pnpm and Vite, reducing build time by 20%.
              </p>
            </div>
            <div className="mt-5 flex gap-1">
              {[
                "Typescript",
                "ReactJS",
                "NextJS",
                "NodeJS",
                "TailwindCSS",
                "Vite",
                "Jest",
                "Docker",
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-2 border text-xs rounded-full text-white"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          {/* first experience */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold">
              Software Engineer @PChome Online
            </h3>
            <h6 className="font-thin italic">
              Frontend Team (Apr 2022 – Sep 2022)
            </h6>
            <div className="mt-4 space-y-3">
              <p>
                Revamped the company&apos;s decade-old e-commerce landing page,
                serving 1.3 billion users, to elevate the brand&apos;s image and
                enhance user experience.
              </p>
              <p>
                Migrated the frontend codebase from jQuery to React/TypeScript
                in two months, introducing a component-based architecture to
                improve reusability and maintainability.
              </p>
              <p>
                Used Storybook and Webpack to build a scalable UI package in
                collaboration with UI/UX designers and mobile App developers for
                three company sites across multiple business units.
              </p>
              <p>
                Enhanced performance by lazy loading images and reducing 75% of
                HTTP requests during the first paint, leading to a 35% decrease
                in page load times.
              </p>
              <div className="mt-5 flex gap-1">
                {["ReactJS", "jQuery", "Storybook", "Webpack", "Rollup"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="p-2 border text-xs rounded-full text-white"
                    >
                      {skill}
                    </div>
                  )
                )}
              </div>
              <h6 className="font-thin italic">
                Content Management System Team (July 2021 – Apr 2022)
              </h6>
              <p>
                Developed a role-based access control feature from scratch for
                an in-house content management system using jQuery, PHP, and
                SQL, supporting hundreds of employees.
              </p>
              <p>
                Optimized landing page SEO by refactoring CSS animations into
                composited animations, reducing the Cumulative Layout Shift
                score from 0.5 to below 0.1 on Google Lighthouse report in a
                week.
              </p>
              <p>
                Ensured cross-browser compatibility by providing fallback
                support with Javascript polyfills and defining DocType in HTML,
                extending support for users on older browsers.
              </p>
              <div className="mt-5 flex gap-1">
                {["PHP", "SQL", "Javascript", "SEO"].map((skill) => (
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
        </section>

        <section className="mt-20 scroll-mt-32" id="PROJECTS">
          PROJECTS
        </section>
      </main>
    </div>
  );
}
