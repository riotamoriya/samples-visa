import React from 'react';
import YouTube from 'react-youtube';

import * as styles from './YouTubeAutoPlay.module.css';


const YouTubeAutoPlay = ({ videoId }) => {
  
  return (
    <div className={styles.youtubeContainer}>
      <YouTube videoId={videoId}/>
    </div>
  );
};

export default YouTubeAutoPlay;
