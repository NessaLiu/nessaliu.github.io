import "./contact.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Mail from "../../images/mail-icon.svg";
import Insta from "../../images/insta-icon.svg";
import GitHub from "../../images/github-icon.svg";
import LinkedIn from "../../images/linkedin-icon.svg";

const Contact = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);
  const icon4Ref = useRef(null);

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
    })
      .from(
        titleRef.current,
        {
          duration: 1,
          autoAlpha: 0,
          y: 50,
        },
        0.5
      )
      .from(
        [
          icon1Ref.current,
          icon2Ref.current,
          icon3Ref.current,
          icon4Ref.current,
        ],
        {
          duration: 0.5,
          autoAlpha: 0,
          y: 30,
          stagger: 0.25,
          ease: "elastic.out",
        },
        "<+=0.5"
      );
  }, []);

  return (
    <section id="contact">
      <div ref={containerRef} className="contact-box">
        <h1 ref={titleRef} className="contact-title">
          contact:
        </h1>
        <ul className="menu-bar">
          <li className="icons">
            <a href="mailto: vanessaliu014@gmail.com">
              <img ref={icon1Ref} src={Mail} alt="" />
            </a>
          </li>
          <li className="icons">
            <a href="https://www.instagram.com/vanesssa_liu/" target="_blank">
              <img ref={icon2Ref} src={Insta} alt="" />
            </a>
          </li>
          <li className="icons">
            <a href="https://github.com/NessaLiu" target="_blank">
              <img ref={icon3Ref} src={GitHub} alt="" />
            </a>
          </li>
          <li className="icons">
            <a
              href="https://www.linkedin.com/in/vanessa-liu014/"
              target="_blank"
            >
              <img ref={icon4Ref} src={LinkedIn} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
