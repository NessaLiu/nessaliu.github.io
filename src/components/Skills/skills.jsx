import "./skills.css";
import React from "react";
import SkillsTag from "../SkillsTag/skillsTag";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { IconContext } from "react-icons";
import { FaRegFileCode } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";

const Skills = ({ skills }) => {
  const languages = skills.languages;
  const tools = skills.toolsAndLibraries;
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const langBoxRef = useRef(null);
  const toolsBoxRef = useRef(null);
  const langHeaderRef = useRef(null);
  const toolsHeaderRef = useRef(null);
  const tagRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
    tl.from(containerRef.current, {
      duration: 0.5,
      autoAlpha: 0,
      scale: 0.8,
    }).from(
      titleRef.current,
      {
        duration: 1,
        autoAlpha: 0,
        y: 50,
      },
      0.5
    );

    let languages_tl = gsap.timeline({
      scrollTrigger: {
        trigger: langBoxRef.current,
      },
      delay: 1,
    });
    languages_tl
      .from(
        langHeaderRef.current,
        {
          autoAlpha: 0,
          //   y: 40,
          duration: 0.5,
        },
        0
      )
      .from(
        ".langsTagComponentContainer",
        {
          duration: 0.4,
          autoAlpha: 0,
          stagger: 0.25,
          ease: "power1.in",
        },
        "<+=0.5"
      );

    let tools_tl = gsap.timeline({
      scrollTrigger: {
        trigger: toolsBoxRef.current,
      },
      delay: 1.5,
    });
    tools_tl
      .from(
        toolsHeaderRef.current,
        {
          autoAlpha: 0,
          //   y: 40,
          duration: 0.4,
        },
        0
      )
      .from(
        ".toolsTagComponentContainer",
        {
          duration: 0.4,
          autoAlpha: 0,
          stagger: 0.25,
          ease: "power1.in",
        },
        "<+=0.5"
      );

    //   .from(langBoxRef.current, { autoAlpha: 0, duration: 1 }, 0)
    //   .from(".langTag", {
    //     duration: 0.5,
    //     autoAlpha: 0,
    //     y: 30,
    //     stagger: 0.25,
    //     ease: "elastic.out",
    //   });
    // gsap.from(".toolsTagComponentContainer", {
    //   duration: 0.5,
    //   autoAlpha: 0,
    //   stagger: 0.25,
    //   ease: "power1.in",
    // });
    // languages_tl.from();
    // className={`skillTag${i}`}
  });

  return (
    <section id="skills">
      <div ref={containerRef} className="skillsBox">
        <div ref={titleRef} className="skillsTitle">
          {skills.title}
        </div>
        <div className="skillsContentContainer">
          <div ref={langBoxRef} className="languagesBox">
            <div ref={langHeaderRef} className="languagesHeader">
              <div className="languagesTitle">{skills.subtitleOne}</div>
              <div className="languagesIconContainer">
                <IconContext.Provider value={{ className: "languagesIcon" }}>
                  <FaRegFileCode />
                </IconContext.Provider>
              </div>
            </div>
            <div className="languagesTagsContainer">
              {languages.map((language, i) => {
                return (
                  <div className="langsTagComponentContainer">
                    <SkillsTag className="langTag" skill={language} />
                  </div>
                );
              })}
            </div>
          </div>
          <div ref={toolsBoxRef} className="toolsBox">
            <div ref={toolsHeaderRef} className="toolsHeader">
              <div className="toolsTitle">{skills.subtitleTwo}</div>
              <div className="toolsIconContainer">
                <IconContext.Provider value={{ className: "toolsIcon" }}>
                  <VscTools />
                </IconContext.Provider>
              </div>
            </div>
            <div className="toolsTagsContainer">
              {tools.map((tool) => {
                return (
                  <div className="toolsTagComponentContainer">
                    <SkillsTag skill={tool} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
