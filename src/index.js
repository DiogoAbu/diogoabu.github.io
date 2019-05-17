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
