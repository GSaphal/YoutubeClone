import React, { Component } from "react";

class AddTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: "",
      description: "",
      deadline: "",
      date: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // if (localStorage.getItem("todos") === null) {
    //   var todos = [];
    //   todos.push(this.state);
    //   localStorage.setItem("todos", JSON.stringify(todos));
    // } else {
    //   var moreTodos = localStorage.getItem("todos");
    //   moreTodos = JSON.parse(moreTodos);
    //   moreTodos.push(this.state);
    //   localStorage.setItem("todos", JSON.stringify(moreTodos));
    // }

    // const prevtodoTitle = localStorage.getItem("todoTitle");
    // localStorage.setItem("todoTitle", [this.state.todoTitle, prevtodoTitle]);
    // const prevDescription = localStorage.getItem("description");
    // localStorage.setItem("description", [
    //   this.state.description,
    //   prevDescription,
    // ]);
    // const prevDeadline = localStorage.getItem("deadline");

    // localStorage.setItem("deadline", [this.state.deadline, prevDeadline]);
    // const prevDate = localStorage.getItem("date");

    // localStorage.setItem("date", [this.state.date, prevDate]);
    this.props.history.push("/");
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
export default AddTodos;
