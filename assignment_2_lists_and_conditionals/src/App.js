import React, { Component } from "react";

import "./App.css";
import ValidationComponent from "./Validation/ValidationComponent";
import CharComponent from "./Characters/CharComponent";

class App extends Component {
  state = {inputData: ""}

  changeInputDataHandler = (event) => {
    this.setState({inputData: event.target.value});
  }


  render() {
    return (
      <div className="App">
        <h1>ASSIGNMENT 2</h1>
        <input type="text" onChange={this.changeInputDataHandler} value={this.state.inputData}></input>
        <ValidationComponent enteredText={this.state.inputData} textLength={this.state.inputData.length}/>
        <CharComponent charBoxData={this.state.inputData}/>
      </div>
    );
  }
}

export default App;
