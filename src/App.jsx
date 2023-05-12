import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/Projects";
import Interests from "./components/Interests/Interests";
import Contact from "./components/Contact/Contact";
import Quote from "./components/Quote/Quote";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
// import CarouselGallery from "./components/Carousel/Carousel";
import Slider from "./components/Slider/Slider";
import React from "react";
import gsapInit from "./utils/gsap-init";
import "./styles/global.css";
import { skills, projects, sliderItems } from "./data/data";

// Check if running scripts in valid web-browser
const isValidBrowser = typeof window !== "undefined";
if (isValidBrowser) {
  gsapInit();
}

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Intro />
      <Quote />
      <Resume />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Interests />
      <Slider sliderItems={sliderItems} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
