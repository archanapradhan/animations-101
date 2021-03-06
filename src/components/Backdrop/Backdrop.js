import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {

  const backdropStyles = [
    "Backdrop",
    props.show ? "BackdropOpen" : "BackdropClose",
  ];
  return <div className={backdropStyles.join(" ")}></div>;
};
export default backdrop;
