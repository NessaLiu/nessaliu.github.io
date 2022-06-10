import React, { useCallback } from "react";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/pagination";
// slide images
import Slide1 from "../../images/slide1.jpg";
import Slide2 from "../../images/slide2.jpg";
import Slide3 from "../../images/slide3.jpg";
import Slide4 from "../../images/slide4.jpg";
import Slide5 from "../../images/slide5.jpg";
import Slide6 from "../../images/slide6.png";
import Slide7 from "../../images/slide7.jpg";
import Slide8 from "../../images/slide8.jpg";

/*
sliderItems: {
    key: number;
    imgPath: string;
}[];
*/

const Slider = (props) => {
  //   const [numSlides, setNumSlides] = useState(1);
  //   const [prevSlideIndex, setPrevSlideIndex] = useState(0);
  //   const slideIndex = useSelector((state) => state.slideIndex);
  //   const sliderRef = useRef(null);

  //   const slideMotion = useCallback(() => {
  //     if (slideIndex > prevSlideIndex) {
  //       gsap.from(sliderRef.current, { skewx: 4, duration: 1 });
  //       setPrevSlideIndex(slideIndex);
  //     } else {
  //       gsap.from(sliderRef.current, { skewx: -4, duration: 1 });
  //       setPrevSlideIndex(slideIndex);
  //     }
  //   }, [slideIndex, prevSlideIndex]);

  return (
    <div className="sliderWrapper">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="slide">
          <img src={Slide1} />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={Slide2} />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={Slide3} />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={Slide4} />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={Slide5} />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={Slide6} />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={Slide7} />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={Slide8} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
