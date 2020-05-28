import React from "react";

import "./Modal.css";

const modal = (props) => {
  console.log("props.show", props.show);
  const modalStyles = ["Modal", props.show ? "ModalOpen" : "ModalClose"];
  return (
    <div className={modalStyles.join(" ")}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
