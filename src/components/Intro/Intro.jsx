import "./intro.css";
import Profile from "../../images/profile.jpg";
import { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

const Intro = () => {
  const pictureRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  CustomEase.create("softEase", "0.14, 1.00, 0.34, 1.00");
  CustomEase.create("snapEase", "1.00, 0.290, 1.00, 0.490");

  useEffect(() => {
    let tl = gsap.timeline({});

    tl.from(
      pictureRef.current,
      {
        duration: 1,
        scale: 0.8,
        autoAlpha: 0,
        ease: Power3,
      },
      1
    )
      .from(
        titleRef.current,
        {
          scrollTrigger: {
            trigger: titleRef.current,
          },
          duration: 1,
          autoAlpha: 0,
          x: 40,
          ease: "softEase",
        },
        "<"
      )
      .from(
        descRef.current,
        {
          scrollTrigger: {
            trigger: descRef.current,
          },
          duration: 1,
          autoAlpha: 0,
          x: 40,
          ease: "softEase",
        },
        "<+=0.25"
      );
  });

  return (
    <section id="intro">
      <div ref={pictureRef} className="intro-left-container">
        <img className="profile-pic" src={Profile} alt="" />
      </div>
      <div className="intro-right">
        <div className="intro-right-container">
          <h1 ref={titleRef} className="about-me-title">
            about me
          </h1>
          <p ref={descRef} className="about-me-content">
            Hey there! Nice to meet you :) My name is Vanessa Liu and I'm
            currently a second year student at the University of Waterloo
            enrolled in the Computer Science program on co-op term. I had the
            opportunity to explore several courses including math, computer
            science, and finance! Having just completed my first two study
            terms, I can say it was definitely a new experience. Overall, I'm
            grateful to have gained new knowledge and built fresh connections
            with others. I look forward to the opportunities to come!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
