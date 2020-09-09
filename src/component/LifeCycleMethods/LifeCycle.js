import React, { Component } from "react";
import Axios from "axios";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      comment: "",
      commentFromApi: [],
    };
    // console.log("Constructor called");
  }
  // componentWillMount() {
  //   console.log("CWM called");
  // }
  componentDidMount() {
    console.log(this.props);
    Axios.get("http://localhost:8000/api/v1/comment")
      .then((response) => {
        this.setState({
          commentFromApi: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      comment: this.state.comment,
    };
    Axios.post("http://localhost:8000/api/v1/comment", submitData)
      .then((response) => {
        Axios.get("http://localhost:8000/api/v1/comment")
          .then((response) => {
            this.setState({
              commentFromApi: response.data.data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img src="data:image/jpeg;base64,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" />

              <ul>
                {this.state.commentFromApi.map((item) => {
                  return <li>{item.comment}</li>;
                })}
              </ul>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="comment">Comment</label>{" "}
                <textarea
                  type="text"
                  className="form-control"
                  name="comment"
                  onChange={this.handleChange}
                  value={this.state.comment}
                />
                <button type="submit" className="btn btn-primary mt-3">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LifeCycle;
