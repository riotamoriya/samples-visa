import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

import Button from '../Button';
import Config from '../../config.json';
import Icon from '../Icons/Icon';
// import { isAuth } from '../../helpers/general';

//TO DO: refactor this to handle multiple nested links to avoid hardcoding 'depth'
// have to restructure config.json
// refactor this

import * as styles from './MobileNavigation.module.scss';

const MobileNavigation = ( {close} ) => {
  const [subMenu, setSubMenu] = useState();
  const [category, setCategory] = useState();
  const [depth, setDepth] = useState(0);

  const handleLogout = () => {
    window.localStorage.removeItem('key');
    navigate('/');
    close();
  };

  return (
    <div className={styles.root}>
      <nav>
        <div className={styles.mobileNavContainer}>
          {/* dynamic portion */}
          {depth === 0 && (
            <div>
              {Config.headerLinks.map((navObject) => {
                const hasSubmenu =
                  navObject.category?.length !== undefined ? true : false;
                return (
                  <Link
                    key={navObject.menuLink}
                    className={`${styles.mobileLink}`}
                    to={hasSubmenu === true ? '' : navObject.menuLink}
                    onClick={() => {
                      if (hasSubmenu) {
                        setDepth(1);
                        setCategory(navObject);
                      }
                    }}
                  >
                    {navObject.menuLabel}
                    {hasSubmenu && <Icon symbol={'caret'}></Icon>}
                  </Link>
                );
              })}
            </div>
            
          )}
        </div>
      </nav>

      <div className={styles.mediaButtonContainer}>
        <Button level={'levelGreen'} size={'thin'} >
          gaLxでお問い合わせ
        </Button>
      </div>
  
    </div>
  );
};

export default MobileNavigation;
