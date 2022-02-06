import React from "react";
import "./VideoComponent.css";
import Youtube from "react-youtube";

const VideoYT = () => (
  <div className="video-responsive">
    { /*<iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/watch?v=FyRK7XmdQ9M`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    /> */}
    <Youtube videoId="FyRK7XmdQ9M"/>
  </div>
);

export default VideoYT;