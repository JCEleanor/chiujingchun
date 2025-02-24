"use client";

import React, { useState } from "react";
import { CiLinkedin, CiInstagram, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Links = () => {
  const [hoverText, setHoverText] = useState<null | string>(null);

  return (
    <>
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
    </>
  );
};

export default Links;
