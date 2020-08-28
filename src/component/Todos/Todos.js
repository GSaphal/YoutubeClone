import React, { Component } from "react";
import { Link } from "react-router-dom";
class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    var data = localStorage.getItem("todos");
    data = JSON.parse(data);
    this.setState({
      todos: data,
    });
  }
  render() {
    return (
      <div className="todos">
        <div className="container">
          <div className="row">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-header ">
                Todo's App
                <Link to="/add">
                  <button className="btn btn-primary float-right">
                    <i className="fa fa-plus"></i>
                  </button>
                </Link>
              </div>
              <ul className="list-group list-group-flush">
                {this.state.todos.map((item) => {
                  return (
                    <li className="list-group-item">
                      Title:{item.todoTitle}
                      <br />
                      Date: {item.date}
                      <br />
                      Deadline:{item.deadline}
                      <br />
                      Description:{item.description}
                      <br />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Todos;
