import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    isModalOpen: false,
  };

  showModal = () => {
    console.log("show modal before props.show", this.state.isModalOpen);

    this.setState({ isModalOpen: true });
    console.log("show modal after props.show", this.state.isModalOpen);
  };

  closeModal = (prevSate) => {
    console.log("close modal before props.show", this.state.isModalOpen);

    this.setState({ isModalOpen: false });
    console.log(" close modal after props.show", this.state.isModalOpen);
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal show={this.state.isModalOpen} closed={this.closeModal} />
        <Backdrop show={this.state.isModalOpen} />
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
