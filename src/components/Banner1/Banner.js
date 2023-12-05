import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './Banner.module.css';

const Banner = ({ maxWidth, name, subtitle, color, bgImage, height, bgColor = 'var(--standard-light-grey)', hideSubtitleOnMobile = true }) => {

  const customStyling = {
    backgroundColor: bgColor,
    height: height,
    color: color,
    position: 'relative', // 背景画像を絶対位置で配置するために必要
  };

  return (
    <div className={styles.root} style={customStyling}>
      
      {bgImage && (
        <StaticImage
          src={'../assets/pDSC1885.jpg'}
          alt="" // 背景画像には空のalt属性を設定
          className={styles.bgImage} // 追加のスタイルを適用するためのクラス
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} // 背景画像のスタイリング
          layout="fullWidth"
        />
      )}
      <div className={styles.content} style={{ maxWidth }}>
        <h2>{name}</h2>
        {subtitle && (
          <span className={`${styles.subtitle} ${hideSubtitleOnMobile ? styles.hideSubtitleOnMobile : ''}`}>
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};

export default Banner;
