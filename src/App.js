import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    isModalOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = (prevSate) => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({
              showBlock: !prevState.showBlock,
            }))
          }
        >
          Toggle
        </button>
        <br />

        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {/* By wrapping an element in Transition componenet 
          we can control the display of these elements.
          Most common use of Transition is to animate the mounting and unmouting 
          of a compoenent, also can be used for transition  */}
          {/* following code will display the current state of Transition Entering->Entered->Exiting->Exited */}
          {(state) => (
            <div
              style={{
                height: 100,
                width: 100,
                margin: "25px auto",
                transition: "opacity 1s ease-in-out",
                opacity: state === "exiting" ? 0 : 1,
                backgroundColor: "red",
              }}
            ></div>
          )}
        </Transition>
        {/* a combination of timeout , opacity and transition working out here */}

        {this.state.isModalOpen ? (
          <Modal show={this.state.isModalOpen} closed={this.closeModal} />
        ) : null}
        {this.state.isModalOpen ? (
          <Backdrop show={this.state.isModalOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
