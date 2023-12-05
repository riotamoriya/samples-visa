import React from 'react';
import { Link } from 'gatsby';
import Config from '../../config.json';

import * as styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <h4 className={styles.logo}>
          Thai Visa Support
        </h4>
      </div>

      <p className={styles.contents}>
        Thai Visa Support<br/>
        Copyright 2021 ThaiVisaSupport All Rights Reserved.<br/>
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
