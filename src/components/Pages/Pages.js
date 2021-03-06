import React, { Component, Fragment } from "react";
import Axios from "axios";
import "./pages.css";
export default class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    Axios.get(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics,player&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=AIzaSyAOJj_IHEdUyR5_FaxHqaUu9iJdTQhpwuk"
    )
      .then((response) => {
        this.setState({
          data: response.data.items,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    const videoCard = this.state.data.map((item) => {
      console.log(item);
      return (
        <div className="col-md-3 col-sm-6">
          <div className="card mt-5" style={{ width: "100%" }}>
            <img
              className="card-img-top"
              src={item.snippet.thumbnails.standard.url}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{item.snippet.title}</h5>
              <p className="card-text">{item.snippet.channelTitle}</p>
              <small>
                {item.statistics.viewCount + " views"}{" "}
                <i
                  className="fa fa-circle px-2"
                  style={{ fontSize: "4px" }}
                ></i>
                {item.snippet.publishedAt}
              </small>
            </div>
          </div>
        </div>
      );
    });
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row ">{videoCard}</div>
        </div>
      </Fragment>
    );
  }
}
