import React from 'react';
import { Link } from 'gatsby';
import Config from '../../config.json';

import * as styles from './Footer.module.scss';


const Footer = () => {
  const today = new Date();
  const year_yyyy = today.getFullYear();

  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <h4 className={styles.logo}>
          NM Visa Guide
        </h4>
      </div>

      <p className={styles.contents}>
        Nova Martia Official Visa Guide<br/>
        Copyright {year_yyyy} <br/>
        NovaMartiaOfficialVisaGuide All Rights Reserved.<br/>
        当サイトのテキスト・画像等すべてのコンテンツの転載転用、商用販売を固く禁じます。
      </p>
      <div className={styles.linkContainer}> {/* スタイルクラスの適用 */}
        {
          Config.footerLinks.map((link, id) => (
            <Link key={id} to={link.link}>{link.text}</Link> // GatsbyのLinkコンポーネントを使用
          ))
        }
      </div>
    </div>
  );
};

export default Footer;
