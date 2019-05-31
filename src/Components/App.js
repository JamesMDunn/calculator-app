import React, { Component } from "react";
import History from "./History";
import Button from "./Button";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      displayedNumber: 0
    };
  }

  handleClick = e => {
    let buttonValue = e.target.getAttribute("value");
    console.log(buttonValue);
  };
  render() {
    let calcButtons = [
      "CE",
      "C",
      "÷",
      "7",
      "8",
      "9",
      "x",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "+",
      "0",
      ".",
      "="
    ];
    const grid = calcButtons.map(key => {
      return (
        <Button
          key={key}
          value={key}
          id={key}
          text={key}
          handleClick={this.handleClick}
        />
      );
    });
    return (
      <React.Fragment>
        <div className="container">
          <span className="results">{this.state.displayedNumber}</span>
          <div className="calc-btns">
            <div className="grid">{grid}</div>
          </div>
        </div>

        <History />
      </React.Fragment>
    );
  }
}

export default App;
