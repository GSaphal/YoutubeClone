import React, { Component } from "react";

export default class Child extends Component {
  componentWillReceiveProps(nextProps) {
    console.log("Componet will Reeiver props");
    console.log(nextProps);
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
