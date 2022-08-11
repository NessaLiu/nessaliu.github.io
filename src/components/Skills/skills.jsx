import "./skills.css";
import React from "react";
import SkillsTag from "../SkillsTag/skillsTag";

const Skills = ({ skills }) => {
  const languages = skills.languages;
  const tools = skills.toolsAndLibraries;
  return (
    <section id="skills">
      <div className="skillsBox">
        <div className="skillsTitle">{skills.title}</div>
        <div className="skillsContentContainer">
          <div className="languagesBox">
            <div className="languagesTitle">{skills.subtitleOne}</div>
            <div className="languagesTagsContainer">
              {languages.map((language) => {
                return <SkillsTag skill={language} />;
              })}
            </div>
          </div>
          <div className="toolsBox">
            <div className="toolsTitle">{skills.subtitleTwo}</div>
            <div className="toolsTagsContainer">
              {tools.map((tool) => {
                return <SkillsTag skill={tool} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
