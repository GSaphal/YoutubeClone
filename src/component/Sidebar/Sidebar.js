import React, { Component } from "react";
import "./sidebar.css";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: [
        "Aneesha Khadka",
        "Saphal Ghimire",
        "Sisan Baniya",
        "Wah Banana",
        "Chetan Vlogs",
        "Aneesha Khadka",
        "Saphal Ghimire",
        "Sisan Baniya",
        "Wah Banana",
        "Chetan Vlogs",
        "Aneesha Khadka",
        "Saphal Ghimire",
        "Sisan Baniya",
        "Wah Banana",
        "Chetan Vlogs",
      ],
    };
  }
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <i className="fa fa-home px-3" aria-hidden="true"></i> Home
          </li>
          <li>
            <i className="fa fa-home px-3" aria-hidden="true"></i> Trending
          </li>
          <li>
            <i className="fa fa-home px-3" aria-hidden="true"></i> Subscription
          </li>
          <hr />
          <li className="mx-2 text-uppercase">Subscription</li>
          {this.state.channel.map((item) => {
            return (
              <li>
                <i className="fa fa-home mx-3" aria-hidden="true">
                  {"      "} {item}
                </i>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
