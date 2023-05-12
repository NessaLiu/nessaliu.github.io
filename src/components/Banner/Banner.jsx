import "./banner.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

const Banner = () => {
  const containerRef = useRef(null);
  const firstNameRef = useRef(null);
  const dotRef = useRef(null);
  const lastNameRef = useRef(null);
  CustomEase.create(
    "easeBounce",
    "M0,0 C0.46,0 0.511,0.998 0.674,1.224 0.818,1.424 0.956,1.024 1,0.986 "
  );

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none none",
        },
      })
      .from(containerRef.current, { duration: 1, y: -100, autoAlpha: 0 })
      .from(
        firstNameRef.current,
        { duration: 1, y: -40, autoAlpha: 0, ease: "easeBounce" },
        "<+=0.5"
      )
      .from(
        lastNameRef.current,
        { duration: 1, y: 40, autoAlpha: 0, ease: "easeBounce" },
        "<"
      )
      .from(
        dotRef.current,
        {
          duration: 1,
          autoAlpha: 0,
          scale: 0.75,
          ease: "easeBounce",
        },
        "<+=0.50"
      );
  }, []);

  return (
    <section id="banner">
      <div className="banner-container" ref={containerRef}>
        <div className="banner-name">
          <h1 ref={firstNameRef} className="first-name">
            V A N E S S A
          </h1>
          <h1 ref={dotRef} className="dot">
            •
          </h1>
          <h1 ref={lastNameRef} className="last-name">
            L I U
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
