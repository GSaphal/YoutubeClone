import React, { Component } from "react";
import Axios from "axios";
class EditTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: "",
      description: "",
      deadline: "",
      date: "",
      isLoading: false,
    };
  }
  componentDidMount() {
    Axios.get(
      "http://localhost:8000/api/v1/todos/" + this.props.match.params.id
    )
      .then((response) => {
        var apiData = response.data.data;
        this.setState({
          todoTitle: apiData.todoTitle,
          description: apiData.description,
          deadline: apiData.deadline,
          date: apiData.date,
        });
      })
      .catch((error) => console.log(error));
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      todoTitle: this.state.todoTitle,
      description: this.state.description,
      deadline: this.state.deadline,
      date: this.state.date,
    };
    Axios.post(
      "http://localhost:8000/api/v1/todos/edit/" + this.props.match.params.id,
      data
    )
      .then((response) => {
        this.props.history.push("/");
      })
      .catch((error) => {
        alert("Some error occoured");
      });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-3">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-header ">Add Todos</div>
              <ul className="list-group list-group-flush p-4">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group ">
                    <label htmlFor="todo-title">Add Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="todoTitle"
                      onChange={this.handleChange}
                      value={this.state.todoTitle}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="todo-title">Description</label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="description"
                      onChange={this.handleChange}
                      value={this.state.description}
                    />
                  </div>
                  <div className="form-group ">
                    <label htmlFor="todo-title">Deadline</label>
                    <input
                      type="text"
                      className="form-control"
                      name="deadline"
                      onChange={this.handleChange}
                      value={this.state.deadline}
                    />
                  </div>
                  <div className="form-group ">
                    <label htmlFor="todo-title">Date</label>
                    <input
                      type="text"
                      className="form-control"
                      name="date"
                      onChange={this.handleChange}
                      value={this.state.date}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </form>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditTodos;
