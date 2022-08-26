import "./projects.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import blobBackground from "../../images/green-blob.svg";

const Projects = ({ projects }) => {
  const featuredProjOne = projects.featured[0];
  const featuredProjTwo = projects.featured[1];
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });

    // tl.from(containerRef.current, {
    //   duration: 0.5,
    //   autoAlpha: 0,
    //   scale: 0.8,
    // })
    //   .from(
    //     titleRef.current,
    //     {
    //       duration: 1,
    //       autoAlpha: 0,
    //       y: 50,
    //     },
    //     0.5
    //   )
    //   .from(
    //     [
    //       section1Ref.current,
    //       section2Ref.current,
    //       section3Ref.current,
    //       section4Ref.current,
    //     ],
    //     {
    //       duration: 0.5,
    //       autoAlpha: 0,
    //       y: 50,
    //       stagger: 0.25,
    //     },
    //     "<+=0.5"
    //   );
  }, []);

  return (
    <section id="projects">
      <div ref={containerRef} className="projectsBox">
        <h1 ref={titleRef} className="projectsTitle">
          {projects.title}
        </h1>

        <div className="featuredContainer">
          <div className="featuredProjectContainer">
            <div className="featuredTextContainer featOne">
              <p className="featuredTitle">{projects.featuredTitle}</p>
              <p className="projectTitle">{featuredProjOne.projectName}</p>
              <p className="projectDesc">{featuredProjOne.projectDesc}</p>
              <a className="projectLink" href={featuredProjOne.projectLink}>
                {projects.linkText}
              </a>
            </div>
            <div className="featureBg featOneBg">
              <img src={blobBackground} className="backgroundBlob" />
            </div>
          </div>
          <div className="featuredProjectContainer">
            <div className="featuredTextContainer featTwo">
              <p className="featuredTitle">{projects.featuredTitle}</p>
              <p className="projectTitle">{featuredProjTwo.projectName}</p>
              <p className="projectDesc">{featuredProjTwo.projectDesc}</p>
              <a className="projectLink" href={featuredProjTwo.projectLink}>
                {projects.linkText}
              </a>
            </div>
            <div className="featureBg featTwoBg">
              <img src={blobBackground} className="backgroundBlob" />
            </div>
          </div>
          {/* <div className="featuredProjectContainer">
            <img src={blobBackground} className="backgroundBlob" />
            <div className="featuredTextContainer featTwo">
              <p className="featuredTitle">{projects.featuredTitle}</p>
              <p className="projectTitle">{featuredProjTwo.projectName}</p>
              <p className="projectDesc">{featuredProjTwo.projectDesc}</p>
              <a className="projectLink" href={featuredProjTwo.projectLink}>
                {projects.linkText}
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
