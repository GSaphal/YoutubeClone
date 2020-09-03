import React, { Component } from "react";
import F from "./F";

export default class C extends Component {
  render() {
    return (
      <div>
        <h6>Hello this is C.</h6>
        <button onClick={this.props.handlePrev}>Prev</button>
        <button onClick={this.props.handleNext}>Next</button>
      </div>
    );
  }
}
