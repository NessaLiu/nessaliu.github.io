import "./resume.css";
import ResumePDF from "../../files/final_resume.pdf";
import ResumeBtn from "../../images/resume-button.svg";

const Resume = () => {
  return (
    <section id="resume">
      <div className="resume-container">
        <h1 className="resume-title">resume</h1>
        <div className="resume-contents">
          <a href={ResumePDF} target="_blank">
            <img className="btn-image" src={ResumeBtn} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
