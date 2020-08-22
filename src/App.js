import React from "react";
import "./App.css";
import Topbar from "./component/Topbar/Topbar";
import Sidebar from "./component/Sidebar/Sidebar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Topbar />
        <Sidebar />
      </div>
    );
  }
}

export default App;
