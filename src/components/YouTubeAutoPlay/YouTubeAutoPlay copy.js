import React from 'react';

const YouTubeAutoPlay = ({ videoId }) => {
  
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

  return (
    <iframe
      width="1536"
      height="auto"
      src={src}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default YouTubeAutoPlay;

{/* <iframe
width="560"
height="315"
src={src}
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
></iframe> */}