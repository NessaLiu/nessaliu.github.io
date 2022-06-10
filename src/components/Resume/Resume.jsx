import "./resume.css";
import ResumePDF from "../../files/final_resume.pdf";
import ResumeBtn from "../../images/resume-button.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Resume = () => {
  const resumeContainerRef = useRef(null);
  const titleRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: resumeContainerRef.current,
          start: "top bottom",
        },
      })
      .from(resumeContainerRef.current, {
        duration: 0.5,
        autoAlpha: 0,
        scale: 0.8,
      })
      .from(titleRef.current, {
        duration: 1,
        autoAlpha: 0,
        y: 50,
      })
      .from(
        btnRef.current,
        {
          duration: 1,
          autoAlpha: 0,
          y: 50,
        },
        "<+=0.5"
      );
  });
  return (
    <section id="resume">
      <div ref={resumeContainerRef} className="resume-container">
        <h1 ref={titleRef} className="resume-title">
          resume
        </h1>
        <div ref={btnRef} className="resume-contents">
          <a href={ResumePDF} target="_blank">
            <img className="btn-image" src={ResumeBtn} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
