import React from "react";

const Topbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="javascript:">
          <i className="fa fa-bars px-2" aria-hidden="true"></i>
          <i class="fa fa-youtube-play pl-4 px-1" aria-hidden="true"></i>
          Youtube
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="javascript:">
                <i className="fa fa-video-camera" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:">
                <i className="fa fa-th" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:">
                <i class="fa fa-bell " aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
