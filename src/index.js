import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "./i18n";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Device detection
const userAgent = navigator.userAgent.toLowerCase();
const vendor = navigator.vendor.toLowerCase();
// Is Mobile Chrome from Google?
if (
  userAgent.indexOf("mobile") > -1 &&
  userAgent.indexOf("chrome") > -1 &&
  vendor.indexOf("google") > -1
) {
  document.documentElement.classList.add("os-android");
}

const setVHforCss = () => {
  let vh = window.innerHeight * 0.01;
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

setVHforCss();

// We listen to the resize event
window.addEventListener("resize", () => setVHforCss());

ReactDOM.render(
  <Suspense fallback={null}>
    <App />
  </Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
