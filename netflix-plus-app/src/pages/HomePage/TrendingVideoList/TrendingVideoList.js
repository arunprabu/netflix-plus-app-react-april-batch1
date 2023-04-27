// Class Component
/*
 * import Component class react (must)
 * comp defn must inherit Component class
 *   must have render method
 *     must return jsx
 * export
 */

import { Component } from "react";

// class comp must inherit Component class
class TrendingVideoList extends Component {
  // state is a place to hold comp-wide data
  // state is an object
  // state is a keyword in react
  state = {
    videoResolution: "4K",
    videos: [
      {
        id: 1,
        trendingRank: 1,
        title: "Man Vs Wild",
        thumbnailUrl: "https://placehold.co/260x220",
        desc: "A Wild Adventure show in Discovery Channel",
        views: "700K",
        publishedOn: "1 week ago",
      },
      {
        id: 2,
        trendingRank: 2,
        title: "Planet Earth II",
        thumbnailUrl: "https://placehold.co/260x220",
        desc: "A show by David Attenborough on BBC Earth Channel",
        views: "900K",
        publishedOn: "2 weeks ago",
      },
    ],
  };

  // event handler method 
  handleChangeResolution = () => {
    // Do not mutate state directly. Use setState().
    // this.state.videoResolution = "8K";
    this.setState({
      videoResolution: '8K'
    });
    // whenever setState is called -- render() method will be exec'd 
    // setState() will smartly merge the chage with other properties of state data
  }

  // must have render method
  render() {
    console.log("Inside Render Method");
    // must return jsx
    return (
      <div className="row">
        <p>
          Enjoy watching the videos in {this.state.videoResolution} Resolution{" "}
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.handleChangeResolution}
          >
            Change Resolution
          </button>
        </p>

        <div className="col-md-3">
          <div className="card">
            <img
              src={this.state.videos[0].thumbnailUrl}
              className="card-img-top"
              alt={this.state.videos[0].title}
            />
            <div className="card-body">
              <h5 className="card-title">
                #{this.state.videos[0].trendingRank}{" "}
                {this.state.videos[0].title}
              </h5>
              <p className="card-text">{this.state.videos[0].desc}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {this.state.videos[0].views} Views
              </li>
              <li className="list-group-item">
                {this.state.videos[0].publishedOn}
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img
              src={this.state.videos[1].thumbnailUrl}
              className="card-img-top"
              alt={this.state.videos[1].title}
            />
            <div className="card-body">
              <h5 className="card-title">
                #{this.state.videos[1].trendingRank}{" "}
                {this.state.videos[1].title}
              </h5>
              <p className="card-text">{this.state.videos[1].desc}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {this.state.videos[1].views} Views
              </li>
              <li className="list-group-item">
                {this.state.videos[1].publishedOn}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TrendingVideoList;
