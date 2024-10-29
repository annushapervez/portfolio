// components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ src }) => {
  return (
<video width="800" height="250" controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
