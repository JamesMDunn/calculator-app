import React, { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <button
        value={this.props.value}
        onClick={this.props.handleClick}
        id={this.props.id}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
