import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Interests from "./components/Interests/Interests";
import Contact from "./components/Contact/Contact";
import Quote from "./components/Quote/Quote";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import CarouselGallery from "./components/Carousel/Carousel";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Intro />
      <Quote />
      <Resume />
      <Projects />
      {/* <Interests/> */}
      {/* <CarouselGallery/> */}
      {/* <Contact/> */}
      {/* <Footer/> */}
    </div>
  );
};

export default App;
