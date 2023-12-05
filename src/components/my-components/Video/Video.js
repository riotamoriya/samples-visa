import React from 'react';

const Video = ({ video_url, children }) => {

  const videoStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    filter: 'brightness(0.7)' // ここで動画の明るさを調節
  };

  const textStyle = {
    position: 'absolute',
    top: '60%', // 位置はお好みで調整
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white', // テキストの色
    textAlign: 'center'
  };

  return (
    <>
      <video autoPlay loop muted playsInline style={videoStyle}>
        <source src={video_url} type="video/mp4" />
      </video>
      <div style={textStyle}>
        {children}
      </div>
    </>
  );
};

export default Video;
