import React from "react";
const Link = props => {
  return (
    <a className={props.className} href={props.to}>
      {props.children}
    </a>
  );
};

export default Link;
