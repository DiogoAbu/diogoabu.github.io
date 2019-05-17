import React, { useEffect, useRef, useMemo } from "react";
import ScrollArea from "react-scrollbar";
import { useTranslation } from "react-i18next";

import useState, { Context, scrollTo } from "./useState";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Skills from "./containers/Skills";
import Education from "./containers/Education";

function App() {
  const [state, dispatch] = useState();
  const mainAppRef = useRef(null);
  const scrollRef = useRef(null);

  const { t } = useTranslation();

  const containersRefs = {
    Home: useRef(null),
    Skills: useRef(null),
    Education: useRef(null)
  };

  // Add theme class to App element
  useEffect(() => {
    if (!mainAppRef || !mainAppRef.current) {
      return;
    }

    if (state.isDarkMode) {
      mainAppRef.current.classList.remove("light");
    } else {
      mainAppRef.current.classList.add("light");
    }
  }, [state.isDarkMode]);

  // Scroll when state prop changes
  useEffect(() => {
    //setTimeout(() => scrollRef.current.scrollArea.scrollBottom(), 100);

    if (!state.scrollContainerName) {
      return;
    }

    const desiredRef = containersRefs[state.scrollContainerName];
    if (!desiredRef || !desiredRef.current) {
      return;
    }

    // Get component dimensions
    const { y } = desiredRef.current.getBoundingClientRect();
    // Get scroll ref and run function
    scrollRef.current.scrollArea.scrollYTo(y);

    // Reset scroll state
    dispatch(scrollTo(null));
  }, [state.scrollContainerName]);

  // For Context Provider (https://kentcdodds.com/blog/always-use-memo-your-context-value)
  const value = useMemo(() => ({ state, dispatch, scrollRef }), [
    state,
    scrollRef
  ]);

  document.title = "Diogo Silva - " + t("Desenvolvedor Full-Stack");

  return (
    <Context.Provider value={value}>
      <div
        className={"App" + (state.isDarkMode ? "" : " light")}
        ref={mainAppRef}
      >
        <ScrollArea
          speed={0.8}
          className="ScrollArea"
          horizontal={false}
          smoothScrolling={true}
          ref={scrollRef}
        >
          <Header />
          <Home ref={containersRefs.Home} />
          <Skills ref={containersRefs.Skills} />
          <Education ref={containersRefs.Education} />
        </ScrollArea>
      </div>
    </Context.Provider>
  );
}

export default App;
