import "./projects.css";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import blobBackground from "../../images/green-blob.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Projects = ({ projects }) => {
  const mobileThreshold = 700;
  const desktopThreshold = 1440;
  const isMobileInitial = window.innerWidth <= mobileThreshold;
  const [isMobile, setIsMobile] = useState(isMobileInitial);
  const isDesktopInitial = window.innerWidth >= desktopThreshold;
  const [isDesktop, setIsDesktop] = useState(isDesktopInitial);
  const numMobileCards = 1;
  const numTabletCards = 2;
  const numDesktopCards = 3;

  const featuredProjOne = projects.featured[0];
  const featuredProjTwo = projects.featured[1];
  const sliderItems = projects.projects;

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  function updateScreenStatus() {
    if (window.innerWidth <= mobileThreshold) {
      setIsMobile(true);
      setIsDesktop(false);
    } else if (window.innerWidth >= desktopThreshold) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsDesktop(false);
      setIsMobile(false);
    }
  }

  function numberSlidesShown() {
    if (isMobile) {
      return numMobileCards;
    } else if (isDesktop) {
      return numDesktopCards;
    } else {
      return numTabletCards;
    }
  }

  window.addEventListener("resize", updateScreenStatus);

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
        </div>

        <div className="outerProjectSliderContainer">
          <div className="projectsSliderContainer">
            <span className="transitionText">{projects.transitionText}</span>
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              // slidesPerView={isMobile ? 1 : 2}
              slidesPerView={numberSlidesShown()}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={(swiper) => console.log(swiper)}
            >
              {sliderItems.map((slideItem) => {
                return (
                  <SwiperSlide className="slideProjects" key={slideItem.key}>
                    <div className="projectCard">
                      <p>{slideItem.projectName}</p>
                      <a className="projectLink" href={slideItem.projectLink}>
                        {projects.linkText}
                      </a>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
