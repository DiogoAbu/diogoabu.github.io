import React from "react";
import { useTranslation } from "react-i18next";
import * as icons from "@mdi/js";

import Link from "../components/Link";
import MouseScrollIcon from "../components/MouseScrollIcon";

import "./Home.scss";

const urls = {
  linkedin: "https://www.linkedin.com/in/diogo-azevedo-silva/",
  github: "https://github.com/DiogoAbu",
  mail: "mailto:diogodeazevedosilva@gmail.com",
  curriculum: {
    en: "files/Curriculum Diogo de Azevedo Silva - English.pdf",
    pt: "files/Curriculum Diogo de Azevedo Silva.pdf"
  }
};

const Home = React.forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();

  // document.title = "Diogo Silva - " + t("Desenvolvedor Full-Stack");

  return (
    <div className="Home" ref={ref}>
      <div className="PicContainer">
        <img src="images/pic.jpg" alt="" className="Pic" />
      </div>

      <span className="Name">Diogo de Azevedo Silva</span>
      <span className="Role">{t("Desenvolvedor Full-Stack")}</span>

      <div className="Buttons">
        <Link href={urls.linkedin} icon={icons.mdiLinkedinBox} />
        <Link href={urls.github} icon={icons.mdiGithubCircle} />
        <Link
          href={urls.curriculum[i18n.language]}
          icon={icons.mdiFileDownload}
        />
      </div>

      <span className="Mail">diogodeazevedosilva@gmail.com</span>

      <MouseScrollIcon />
    </div>
  );
});

export default Home;
