import React from "react";
import YouTube from "react-youtube";

class Video extends React.Component {
  render() {
    const options = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
        controls: 1,
      },
    };

    return (
      <YouTube
        videoId="jU2A0O-MwQA"
        className="video-responsive"
        options={options}
        onReady={this._onReady}
        id="video"
      />
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default Video;
