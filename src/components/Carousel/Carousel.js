import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./carousel.css"
import Slide1 from "../../images/slide1.jpg"
import Slide2 from "../../images/slide2.jpg"
import Slide3 from "../../images/slide3.jpg"
import Slide4 from "../../images/slide4.jpg"
import Slide5 from "../../images/slide5.jpg"
import Slide6 from "../../images/slide6.png"
import Slide7 from "../../images/slide7.jpg"
import Slide8 from "../../images/slide8.jpg"


const CarouselGallery = () => {
    return (
        <section id='carousel-gallery'>
            <Carousel infiniteLoop autoPlay>

                <div className="image">
                    <img src={Slide2} alt='pic2'/>
                </div>

                <div className="image">
                    <img src={Slide3} alt='pic3'/>
                </div>

                <div className="image">
                    <img src={Slide4} alt='pic4'/>
                </div>

                <div className="image">
                    <img src={Slide5} alt='pic5'/>
                </div>

                <div className="image">
                    <img src={Slide6} alt='pic6'/>
                </div>

                <div className="image">
                    <img src={Slide7} alt='pic7'/>
                </div>

                <div className="image">
                    <img src={Slide1} alt='pic1'/>
                </div>

                <div className="image">
                    <img src={Slide8} alt='pic8'/>
                </div>

            </Carousel>
        </section>
        
        
    )
}
export default CarouselGallery
