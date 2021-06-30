import React from "react";
import "./LatestVideo.css";
import ReactPlayer from "react-player";

const LatestVideo = () => {
  return (
    <div className="videos">
      <h3> Latest Videos </h3>
      <div className="play_list">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="400px"
          height="250px"
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="400px"
          height="250px"
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="400px"
          height="250px"
        />
      </div>
    </div>
  );
};

export default LatestVideo;
