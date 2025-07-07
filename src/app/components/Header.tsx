"use client";

import React from "react";
import Image from "next/image";

const sections = ["ABOUT", "EXPERIENCE", "PROJECTS", "JOURNAL"];

const Header = () => {
  // console.log("header", sessionStorage.getItem("theme"));

  return (
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
        {sections.map((s) => (
          <a key={s} href={`#${s}`}>
            <li>{s}</li>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
