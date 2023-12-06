import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './Hero.module.scss';
import Button from '../Button';
import { Link } from 'gatsby';


const Hero = () => {
  return (
    <div className={styles.root2}>
      <StaticImage
        src="../../assets/header.jpg"
        alt="画像の説明"
        layout="fullWidth"
        className={styles.heroImage}
      />
      <div className={styles.sentenceContainer}>
        <div className={styles.subTitle}>タイのVISA相談窓口</div>
        <div className={styles.title}>タイビザ サポート</div>
        <div className={styles.article1}>
          タ イ 国 内 で の ビ ザ 取 得に 関 し て<br/>
          全 て 日 本 語 対 応 で サ ポ ー ト
        </div>
        <div className={styles.button}>
          <Button level={'primary'} size={'thin'} disabled={true}>
            LINEで無料相談
          </Button>
        </div>
      </div>
    </div>
  )
}

const Hero2 = (
  {
    title,
    subtitle,
    ctaText,
    image,
    maxWidth,
    ctaLink,
    ctaTo,
    header,
  }

) => {
  
  return (
      <div className={styles.root} style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

      <div className={styles.content} style={{ maxWidth: maxWidth }}>
        {/* {header && <span className={styles.header}>{header}</span>} */}

        {title && 
          <h2 className={styles.sublitle}>
            タイのVISA相談窓口
          </h2>}
        {title && <h2 className={styles.title}>{title}</h2>}

        {subtitle && <span className={styles.sentence}>{subtitle}</span>}
        {ctaText && (
          <Button level={'primary'} size={'basic'} disabled={true}>
            LINEで無料相談
          </Button>
        )}
        {ctaLink && (
          <Link className={styles.ctaLink} to={ctaTo}>
            {ctaLink}
          </Link>
        )}
      </div>

    </div>
  );
};

export default Hero;
