import React, { Component } from "react";
import "./sidebar.css";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      part: ["Library", "History", "Watch Later", "Liked Vidoes"],
    };
  }
  handleToggle = () => {
    this.props.isOpen();
  };
  render() {
    return (
      <div>
        <div className="sidebar-wrapper"></div>{" "}
        <div className="sidebar">
          <ul>
            <li>
              <a className="navbar-brand" href="#">
                <button
                  onClick={this.handleToggle}
                  className="btn btn-primary btn-toggle"
                >
                  <i className="fa fa-bars"></i>
                </button>
                <img
                  className="youtube-logo"
                  src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
                />
                <span className="youtube-name">YouTube</span>
              </a>
            </li>
            <li>
              <i className="fa fa-home px-3" aria-hidden="true"></i> Home
            </li>
            <li>
              <i className="fa fa-home px-3" aria-hidden="true"></i> Trending{" "}
            </li>
            <li>
              <i className="fa fa-home px-3" aria-hidden="true"></i>{" "}
              Subscription
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
      </div>
    );
  }
}

export default Sidebar;
