import React, { useContext, useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import { languages } from "countries-list";

import Icon from "@mdi/react";
import { mdiLightbulb, mdiLightbulbOff } from "@mdi/js";

import { Context, toggleDarkMode } from "../useState";

import "./Header.scss";

const availableLangs = ["en", "pt"];

function DropdownMenu({ buttonRef, menuRef, onClick, currentLang }) {
  const width = 200;
  const dimensions = buttonRef.current.getBoundingClientRect();

  const style = {
    width: width,
    left: dimensions.left + dimensions.width - width,
    top: dimensions.top + dimensions.height - 1
  };

  return ReactDOM.createPortal(
    <div className="DropdownMenu" style={style} ref={menuRef}>
      {availableLangs.map(code => (
        <button
          key={code}
          onClick={() => onClick(code)}
          className={currentLang === code ? "active" : null}
        >
          {languages[code].native}
        </button>
      ))}
    </div>,
    document.getElementsByClassName("App")[0]
  );
}

function Header() {
  const { state, dispatch } = useContext(Context);
  const { t, i18n } = useTranslation();

  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  const toggleMenu = () => {
    setIsShowingMenu(prev => !prev);
    buttonRef.current.classList.toggle("active");
  };

  const onChangeLanguage = language => {
    toggleMenu();
    i18n.changeLanguage(language).then(() => {
      document.title = "Diogo Silva - " + t("Desenvolvedor Full-Stack");
    });
  };

  // Make clicks outside dropdown menu close it
  useEffect(() => {
    const listener = event => {
      if (!menuRef.current || menuRef.current.contains(event.target)) {
        return;
      }

      toggleMenu();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [menuRef, toggleMenu]);

  const currentLang = availableLangs.includes(i18n.language)
    ? i18n.language
    : "en";

  return (
    <div className="Header">
      <button className="Button" onClick={() => dispatch(toggleDarkMode())}>
        <Icon
          className="icon"
          path={state.isDarkMode ? mdiLightbulbOff : mdiLightbulb}
          size={1}
        />
      </button>
      <div className="ButtonDropdown">
        <button ref={buttonRef} className="Button" onClick={toggleMenu}>
          {currentLang}
        </button>
        {isShowingMenu && (
          <DropdownMenu
            buttonRef={buttonRef}
            menuRef={menuRef}
            onClick={onChangeLanguage}
            currentLang={currentLang}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
