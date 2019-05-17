import React from "react";
import { useTranslation } from "react-i18next";

import "./Skills.scss";
import Skill from "../components/Skill";
import Tag from "../components/Tag";
import MouseScrollIcon from "../components/MouseScrollIcon";

const skills = [
  { title: "Javascript, Node", grade: 8 },
  { title: "Typescript", grade: 6, brand: "success" },
  { title: "HTML5", grade: 6, brand: "warning" },
  { title: "CSS3, LESS, SASS", grade: 5, brand: "info" },
  { title: "PHP", grade: 5, brand: "danger" }
];

const otherSkills = [
  "REST API",
  "AJAX",
  "JSON",
  "HATEOS",
  "GIT",
  "Github",
  "React",
  "React-Native",
  "Redux",
  "Mobx",
  "ESLint",
  "TSLint",
  "Docker"
];

const Skills = React.forwardRef((props, ref) => {
  const { t } = useTranslation();

  return (
    <div className="Skills" ref={ref}>
      <div className="Title">{t("Competências")}</div>

      <div className="SkillList">
        {skills.map(skill => (
          <Skill key={skill.title} {...skill} />
        ))}
      </div>

      <div className="OtherSkills">
        {otherSkills.map((skill, index) => (
          <Tag
            key={skill}
            text={skill}
            brand={index % 2 === 0 ? "success" : "info"}
          />
        ))}
      </div>

      <MouseScrollIcon />
    </div>
  );
});

export default Skills;
