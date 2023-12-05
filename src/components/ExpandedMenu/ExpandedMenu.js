import { Link } from 'gatsby';
import React from 'react';

import * as styles from './ExpandedMenu.module.css';

const ExpandedMenu = (props) => {
  const { menu } = props;

  if (menu === null || menu === undefined) return <React.Fragment />;
  return (
    <div className={styles.root}>
      <div className={styles.linkContainers}>
        {menu?.map((item, index) => {
          return (
            <div key={index} className={styles.categoryContainer}>
              <span className={styles.categoryName}>{item.categoryLabel}</span>
              <ul>
                {item.submenu.map((link, linkIndex) => {
                  return (
                    <li key={linkIndex}>
                      <Link className={styles.menuLink} to={link.menuLink}>
                        {link.menuLabel}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className={styles.imageContainer}>
        <img src={'/collections/my-collection1.png'} alt={'header 1'}></img>
        <img src={'/collections/my-collection3-2-1.jpg'} alt={'header 2'}></img>
      </div>
    </div>
  );
};

export default ExpandedMenu;
