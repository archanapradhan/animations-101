import React from "react";
import Transition from "react-transition-group/Transition";
import "./Modal.css";

const modal = (props) => {
  return (
    <Transition in={props.show} timeout={300} mountOnEnter unmountOnExit>
      {(state) => {
        const modalStyles = [
          "Modal",
          props.show === "entering"
            ? "ModalOpen"
            : props.show === "exiting"
            ? "ModalClose"
            : null,
        ];
        return (
          <div className={modalStyles.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
