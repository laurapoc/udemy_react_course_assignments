import React, { Component } from "react";

import "./App.css";

import ValidationComponent from "./Validation/Validation";
import CharComponent from "./Characters/Characters";
import Dots from "./Dots/Dots";

class App extends Component {
  state = { inputData: "" };

  changeInputDataHandler = (event) => {
    this.setState({ inputData: event.target.value });
  };

  deleteCharHandler = (index) => {
    const dataArray = this.state.inputData.split("");
    dataArray.splice(index, 1);
    const updatedData = dataArray.join("");
    this.setState({ inputData: updatedData });
  };

  render() {
    const charList = this.state.inputData.split("").map((char, index) => {
      return (
        <div key={index} className="inlineLIst">
          <CharComponent click={() => this.deleteCharHandler(index)} character={char} />
          <Dots />
        </div>
      );
    });

    return (
      <div className="App">
        <h1>ASSIGNMENT 2</h1>
        <input type="text" onChange={this.changeInputDataHandler} value={this.state.inputData}></input>
        <p>The text you entered is: {this.state.inputDatat}.</p>
        <ValidationComponent enteredText={this.state.inputData} textLength={this.state.inputData.length} />
        {charList}
      </div>
    );
  }
}

export default App;
