// Fn comp with arrow fn

import LatestVideo from "./LatestVideo/LatestVideo";
import RecommendedVideoList from "./RecommendedVideoList/RecommendedVideoList";
import TrendingVideoList from "./TrendingVideoList/TrendingVideoList";

// rafce
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Home Page!</h1>

      <div className="row mb-3">
        <h2>Latest Videos | Props (Parent to Child Component Commn) Demo</h2>
        <div className="col-md-3">
          <LatestVideo
            title="Arg Vs Fra FIFA 2022 Final"
            thumbnailUrl="https://via.placeholder.com/280x200"
            views="2M"
            publishedOn="6 days ago"
          >
            Watch the highlights of Argentina and France played in Qatar.
          </LatestVideo>
        </div>

        <div className="col-md-3">
          <LatestVideo
            title="CSK Vs KKR IPL 2023"
            thumbnailUrl="https://via.placeholder.com/280x200"
            views="4M"
            publishedOn="2 days ago"
          >
            Watch the highlights CSK Vs KKR IPL 2023.
          </LatestVideo>
        </div>

        <div className="col-md-3">
          <LatestVideo
            title="GT Vs MI IPL 2023"
            thumbnailUrl="https://via.placeholder.com/280x200"
            views="1.2M"
            publishedOn="5 hours ago"
          >
            Watch the highlights GT Vs MI IPL 2023.
          </LatestVideo>
        </div>
      </div>

      <div className="mb-3">
        <h2>Trending Videos | Class Component, States and Events Demo</h2>
        <TrendingVideoList />
      </div>

      <div className="mb-3">
        <h2>Recommended Videos | Class Comp, States, Events, Lists & Keys and Conditionals Demo</h2>
        <RecommendedVideoList />
      </div>
    </div>
  );
};

export default HomePage;
