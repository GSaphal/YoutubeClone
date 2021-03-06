import React, { Component, Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarResponsive from "./components/Sidebar/SidebarResponsive";
import Pages from "./components/Pages/Pages";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReponsive: false,
    };
  }
  isOpen = () => {
    this.setState({
      isReponsive: !this.state.isReponsive,
    });
  };
  render() {
    return (
      <Fragment>
        <Navbar isOpen={this.isOpen} isReponsive={this.state.isReponsive} />
        <div className="content">
          <SidebarResponsive />
          {this.state.isReponsive ? <Sidebar isOpen={this.isOpen} /> : ""}
          <div className="pages">
            <Pages />
          </div>
        </div>
      </Fragment>
    );
  }
}
