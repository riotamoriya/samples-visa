import React from 'react';

import * as styles from './VideoSection.module.scss';
import YouTubeAutoPlay from '../YouTubeAutoPlay/YouTubeAutoPlay';


const VideoSection = (props) => {
  const { bgColor, title, quote } = props;

  return (
    <div className={styles.root} style={{ backgroundColor: bgColor }}>
      <div className={styles.title}>
        TJチャンネルさんで<br/>
        ご紹介頂きました★
      </div>
      <div className={styles.subtitle}>
        タイの複雑なビザに関してわかりやすく解説頂いておりますので是非↓
      </div>
      
      <YouTubeAutoPlay videoId={'gRb7XsiKmFg'} className={styles.video}/>

    </div>
  );
};

export default VideoSection;
