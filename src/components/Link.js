import React from "react";
import Icon from "@mdi/react";

import "./Link.scss";

function Link({ icon, ...rest }) {
  return (
    <a className="Link" {...rest}>
      <Icon className="icon" path={icon} size={1.25} />
    </a>
  );
}

Link.defaultProps = {
  target: "_blank",
  rel: "noopener noreferrer"
};

export default React.memo(Link);
