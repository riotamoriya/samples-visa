import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './Hero.module.scss';
import Button from '../Button';
import { Link } from 'gatsby';


const Hero = () => {
  return (
    <div className={styles.root2}>
      <StaticImage
        src="../../assets/city.webp"
        alt="ランドマーク"
        layout="fullWidth"
        className={styles.heroImage}
      />
      <div className={styles.sentenceContainer}>
        <div className={styles.subTitle}>
          ノヴァマルティア公式<br/>
          VISAサポート
        </div>
        <div className={styles.title}>
          Nova Martia<br/>
          ビザサポート
        </div>
        <div className={styles.article1}>
          ノヴァマルティアでのビ ザ 取 得の案内サポート
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

export default Hero;
