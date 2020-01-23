import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link as RLink
} from "react-router-dom";
const Link = props => {
  return (
    <a className={props.className} href={props.to}>
      {props.children}
    </a>
  );
};

export default Link;
