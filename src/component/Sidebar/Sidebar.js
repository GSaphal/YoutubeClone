import React, { Component } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
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
      ],
      part: ["Library", "History", "Watch Later", "Liked Vidoes"],
    };
  }
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">
              <i className="fa fa-home px-3" aria-hidden="true"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/feed/trending">
              <i className="fa fa-home px-3" aria-hidden="true"></i> Trending{" "}
            </Link>
          </li>
          <li>
            <Link to="/feed/subscription">
              <i className="fa fa-home px-3" aria-hidden="true"></i>{" "}
              Subscription
            </Link>
          </li>
          <hr />
          {this.state.part.map((data) => {
            return (
              <li>
                <i className="fa fa-home px-3" aria-hidden="true"></i> {data}
              </li>
            );
          })}
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
