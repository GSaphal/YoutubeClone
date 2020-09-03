import React, { Component } from "react";
import B from "./B";
import C from "./C";
export default class A extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }
  handleNext = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };
  handlePrev = () => {
    this.setState({
      page: this.state.page - 1,
    });
  };
  switchComponents = (params) => {
    switch (params) {
      case 1:
        return <B handleNext={this.handleNext} />;
      case 2:
        return <C handleNext={this.handleNext} handlePrev={this.handlePrev} />;
    }
  };
  //   handleChange = (e) => {
  //     this.setState({
  //       [e.target.name]: e.target.value,
  //     });
  //   };
  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     alert("Your name is" + this.state.firstname + this.state.lastname);
  //   };
  render() {
    return <div>{this.switchComponents(this.state.page)}</div>;
  }
}
