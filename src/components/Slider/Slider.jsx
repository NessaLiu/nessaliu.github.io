import React, { useCallback } from "react";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

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
  const sliderItems = props.sliderItems;

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
        {sliderItems.map((slideItem) => {
          console.log(slideItem.imgLink);
          return (
            <SwiperSlide className="slide" key={slideItem.key}>
              <img src={slideItem.imgLink} alt={slideItem.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
