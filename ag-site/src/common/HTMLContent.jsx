import React from "react";

export default ({ html, classNames = "" }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} className={classNames} />
);
