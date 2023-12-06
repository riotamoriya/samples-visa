import React from 'react';

import * as styles from './VideoSection.module.scss';
import YouTubeAutoPlay from '../YouTubeAutoPlay/YouTubeAutoPlay';


const VideoSection = () => {
  
  return (
    <div className={styles.root} >
      <div className={styles.title}>
        公式チャンネルを開設しました
      </div>
      <div className={styles.subtitle}>
        当局のアンバサダー、アリアさんの動画による説明もぜひご覧ください↓
      </div>
      
      <YouTubeAutoPlay videoId={'Is0VNGXy944'} className={styles.video}/>

    </div>
  );
};

export default VideoSection;
