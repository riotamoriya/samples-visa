import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import { navigate } from 'gatsby';

import * as styles from './Brand.module.scss';


const Brand = () => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <img src="/brand.png" className={styles.brandImg} alt="" /> */}
      {/* <StaticImage src="../images/zenn.png" alt="Zenn" /> */}
      <StaticImage src="../../assets/brand.png" className={styles.brandImg} alt="brand-logo" />
      
    </div>
  );
};

export default Brand;
