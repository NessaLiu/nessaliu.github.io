import "./skillsTag.css";
import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { HiCheck } from "react-icons/hi";

const SkillsTag = ({ skill }) => {
  return (
    <div className="skillsTagContainer">
      <div className="bulletCircle">
        <div className="checkmark">
          <HiCheck className="checkIcon" />
        </div>
      </div>
      <div className="textContainer">
        <div className="skillTitle">{skill}</div>
      </div>
    </div>
  );
};

export default SkillsTag;
