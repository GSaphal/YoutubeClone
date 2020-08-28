import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
class Todos extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    Axios.get("http://localhost:8000/api/v1/todos")
      .then((response) =>
        this.setState({
          todos: response.data.data,
        })
      )
      .catch((error) => console.log(error));
  };

  handleDelete = (event, id) => {
    event.preventDefault();
    Axios.post("http://localhost:8000/api/v1/todos/delete/" + id)
      .then((response) => {
        this.getData();
      })
      .catch((error) => {
        alert("Some error occoured");
      });
  };
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
                    <li key={item.id} className="list-group-item">
                      <b> Title:</b> {item.todoTitle}
                      <br />
                      <b> Date: </b>
                      {item.date}
                      <br />
                      <b> Deadline:</b> {item.deadline}
                      <br />
                      <b> Description:</b> {item.description}
                      <br />
                      <Link to={"/edit/" + item.id}>
                        {" "}
                        <button className="btn btn-secondary mt-3 mx-2">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="btn btn-danger mt-3"
                        onClick={(e) => this.handleDelete(e, item.id)}
                      >
                        Delete
                      </button>
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
