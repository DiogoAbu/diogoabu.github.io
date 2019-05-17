import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Icon from "@mdi/react";
import { mdiChevronUpBox } from "@mdi/js";

import { Context } from "../useState";

import "./Education.scss";
import Tag from "../components/Tag";

const Education = React.forwardRef((props, ref) => {
  const { scrollRef } = useContext(Context);
  const { t } = useTranslation();

  const educations = [
    {
      year: "2019 - " + t("Agora"),
      title: t("Sistemas de Informação"),
      more: "Estácio de Sá"
    }
  ];

  const languages = [
    { name: t("Português"), proficiency: t("Nativo") },
    { name: t("Inglês"), proficiency: t("Fluente") }
  ];

  const onScrollToTop = () => {
    scrollRef.current.scrollArea.scrollTop();
  };

  return (
    <div className="Education" ref={ref}>
      <div className="Title">{t("Educação")}</div>

      {educations.map((each, index) => (
        <div key={index} className="EducationContainer">
          <div className="EducationYearContainer">
            <div className="EducationYear">{each.year}</div>
          </div>
          <div className="EducationDetails">
            <span className="EducationTitle">{each.title}</span>
            {each.more}
          </div>
        </div>
      ))}

      <div className="Languages">
        {languages.map(({ name, proficiency }, index) => (
          <Tag
            key={name}
            text={name + " - " + proficiency}
            brand={index % 2 === 0 ? "success" : "info"}
          />
        ))}
      </div>

      <button className="ScrollToTopIcon" onClick={onScrollToTop}>
        <Icon path={mdiChevronUpBox} size={1.5} />
      </button>
    </div>
  );
});

export default Education;
