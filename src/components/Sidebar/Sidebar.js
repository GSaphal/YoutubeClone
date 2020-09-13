import React, { Component } from "react";
import "./sidebar.css";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      part: ["Library", "History", "Watch Later", "Liked Vidoes"],
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
            <i className="fa fa-home px-3" aria-hidden="true"></i> Trending{" "}
          </li>
          <li>
            <i className="fa fa-home px-3" aria-hidden="true"></i> Subscription
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
        </ul>
      </div>
    );
  }
}

export default Sidebar;
