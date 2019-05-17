import React from "react";

import "./Tag.scss";

const brands = ["info", "success"];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Tag({ text, brand }) {
  const brandClass = brand
    ? " " + brand
    : " " + brands[getRandomIntInclusive(0, brands.length - 1)];

  return <span className={"Tag" + brandClass}>{text}</span>;
}

export default React.memo(Tag);
