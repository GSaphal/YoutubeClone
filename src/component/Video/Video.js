import React, { Component } from "react";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    // this.getData=this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(){

  }

  getData = () => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          data: response,
        })
      );
  };
  render() {
    return (
      <div>
        {/* <button className="btn mt-3 btn-primary" onClick={() => this.getData()}>
          Get Data
        </button> */}
        <div className="container-fluid">
          <div className="row">
            {this.state.data.map((item) => {
              return (
                <div className="col-md-3">
                  <div class="card  mt-3" style={{ width: "20rem" }}>
                    <img
                      class="card-img-top"
                      src="https://media.gettyimages.com/photos/woman-lifts-her-arms-in-victory-mount-everest-national-park-picture-id507910624?s=612x612"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>
                      <p class="card-text">{item.completed}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Video;
