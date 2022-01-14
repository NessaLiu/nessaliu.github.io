import "./intro.css"
import Profile from "../../images/profile.jpg"

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro-left">
                <div className="intro-left-container">
                    <img src={Profile} alt="" className="profile-pic"/>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-right-container">
                    <h1 className="about-me-title">about me</h1>
                    <p className="about-me-content">
                        Hey there! Nice to meet you :) My name is Vanessa Liu and I'm currently a first year student at the University of Waterloo enrolled in the Computing and Financial Management program.
                        I had the opportunity to explore several courses including math, computer science, and finance!
                        Having just completed my first term, I can say it was definitely a new experience. Overall, I'm grateful to have gained new knowledge and built fresh connections with others. I look forward to this second term!
                    </p>
                </div>
            </div>
        </section>
        
    )
}

export default Intro
