import { createContext, useReducer, useEffect } from "react";

// Define context
export const Context = createContext();

// Default state
const initialState = {
  isDarkMode: true,
  scrollContainerName: null
};

// Action constants
export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const SCROLL_TO = "SCROLL_TO";

// Action helpers
export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE
});

export const scrollTo = scrollContainerName => ({
  type: SCROLL_TO,
  payload: scrollContainerName
});

// State reducer
function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode
      };

    case SCROLL_TO:
      return {
        ...state,
        scrollContainerName: action.payload
      };

    default:
      return state;
  }
}

// Read from local storage or get default state
function getInitialState() {
  if ("state" in localStorage) {
    // Merge with current state for it may have new properties
    return {
      ...initialState,
      ...JSON.parse(localStorage.getItem("state"))
    };
  }

  return {
    ...initialState,
    isDarkMode: getPrefersDark()
  };
}

// Check if user prefered color scheme is dark
function getPrefersDark() {
  if (!window.matchMedia) return initialState.isDarkMode;
  return window.matchMedia("(prefers-color-scheme: dark").matches;
}

// Hook
export default function useState() {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  // Save to local storage when state changes
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
}
