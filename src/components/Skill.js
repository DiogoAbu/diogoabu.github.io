import React from "react";

import "./Skill.scss";

function Skill({ title, grade, brand }) {
  const brandClass = brand ? " " + brand : "";
  return (
    <div className="Skill">
      <div className="Details">
        <span>{title}</span>
        <span>{grade}/10</span>
      </div>
      <div className="ProgressContainer">
        <div
          className={"ProgressFill" + brandClass}
          style={{ width: (grade / 10) * 100 + "%" }}
        />
      </div>
    </div>
  );
}

export default React.memo(Skill);
