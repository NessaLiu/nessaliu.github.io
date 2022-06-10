import "./interests.css";
import girl from "../../images/art-girl.png";
import clothes from "../../images/art-clothes.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Interests = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

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
      .from(titleRef.current, {
        duration: 1,
        autoAlpha: 0,
        y: 50,
      })
      .from(
        section1Ref.current,
        {
          duration: 1,
          autoAlpha: 0,
          y: 50,
        },
        "<+=0.5"
      )
      .from(
        img1Ref.current,
        {
          scale: 0.8,
          autoAlpha: 0,
          duration: 1,
        },
        "<"
      )
      .from(section2Ref.current, {
        duration: 1,
        autoAlpha: 0,
        y: 50,
      })
      .from(
        img2Ref.current,
        {
          scale: 0.8,
          autoAlpha: 0,
          duration: 1,
        },
        "<"
      );
  }, []);

  return (
    <section id="interests">
      <div ref={containerRef} className="interests-container">
        <h1 ref={titleRef} className="interests-title">
          interests
        </h1>
        <div className="row1">
          <div ref={img1Ref} className="clothes-container">
            <img className="clothes" src={clothes} />
          </div>
          <div ref={section1Ref} className="interest-block">
            <h2 className="interest-name">At a Young Age...</h2>
            <div className="interest-desc">
              <p>
                I was given the opportunity to participate in several
                extracurricular activites including language classes, piano
                classes, music theory, drawing lessons, skating and swimming
                lessons, and just about anything my parents could find to keep
                me occupied.
              </p>
              <p>
                Back then, I didn't realize how important these experiences
                would be. As I got older, I stopped many of them, but continued
                specifically with art and music. Even with the added stress and
                pressure to keep up in school while performing well in classes,
                my parents were adamant on me continuing. There were several
                instances where I was sure I was ready to give up, but time and
                time again, it felt wrong to let go of all the hard work.
              </p>
            </div>
          </div>
        </div>

        <div className="row2">
          <div ref={section2Ref} className="interest-block">
            <h2 className="interest-name">And Now...</h2>
            <div className="interest-desc">
              <p>
                After over 10 years of dedication, I've come to truly love the
                things that I used to worry and stress about. After completing
                my Level 10 Piano, Level 10 Music History and Level 10 Harmony
                and Counterpoint courses from the Royal Conservatory of Music,
                my passion for music still stands strong. I'm constantly
                fascinated by all things related to design and any visual
                concepts and I'll always be eager to talk about or just indulge
                in creating art!
              </p>
              <p>
                I've done lots of traditional art pieces and sketches focusing
                mainly on pencil, inking and watercolours, but I'm generating an
                increasing interest in digital art and the connections that can
                be built between technology and design. I hope to learn more
                about such concepts and apply them in new projects soon!
              </p>
            </div>
          </div>
          <div ref={img2Ref} className="girl-container">
            <img className="girl" src={girl} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
