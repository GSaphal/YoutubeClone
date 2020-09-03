import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Topbar from "./component/Topbar/Topbar";
import Sidebar from "./component/Sidebar/Sidebar";
import Video from "./component/Video/Video";
import Trending from "./component/Trending/Trending";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todos from "./component/TodosBackend/Todos";
import AddTodos from "./component/TodosBackend/AddTodos";
import Subscription from "./component/Subscription/Subscription";
import EditTodos from "./component/TodosBackend/EditTodos";
import A from "./component/ParentChild/A";
function App() {
  return (
    <div>
      <A />
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Todos} /> */}
      {/* <Route exact path="/add" component={AddTodos} />
          <Route exact path="/edit/:id" component={EditTodos} /> */}
      {/* </Switch> */}
      {/* <Topbar />
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Switch>
              <Route exact path="/" component={Video} />
              <Route exact path="/feed/trending" component={Trending} />
              <Route exact path="/feed/subscription" component={Subscription} />
            </Switch>
          </div>
        </div> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
