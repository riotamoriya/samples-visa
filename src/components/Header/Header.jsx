import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import Button from '../Button';
import Brand from '../Brand';
import Container from '../Container';
import Config from '../../config.json';
import Drawer from '../Drawer';
import Icon from '../Icons/Icon';
import MobileNavigation from '../MobileNavigation';
import * as styles from './Header.module.scss';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const [activeMenu, setActiveMenu] = useState();

  const handleHover = (navObject) => {
    if (navObject.category) {
      setShowMenu(true);
      // setMenu(navObject.category);
    } else {
      // setMenu(undefined);
    }
    setActiveMenu(navObject.menuLabel);
  };

  // disable active menu when show menu is hidden
  useEffect(() => {
    if (showMenu === false) setActiveMenu(false);
  }, [showMenu]);

  // hide menu onscroll
  useEffect(() => {
    const onScroll = () => {
      setShowMenu(false);
      setActiveMenu(undefined);
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


    // スクロールイベントによるメニューとサーチの非表示ロジック
    useEffect(() => {
      const onScroll = () => {
        setShowMenu(false);
        setActiveMenu(undefined);
  
        // スクロール位置が最上部かどうかを判定
        const atTop = window.scrollY === 0;
      };
  
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
  

  return (
    <div className={styles.root}>
      <Container size={'large'} spacing={'min'}>
        {/* header container */}
        <div className={styles.header}>

          
          <div className={styles.linkContainer}>
            <nav
              role={'presentation'}
              onMouseLeave={() => {
                setShowMenu(false);
              }}
            >
              {Config.headerLinks.map((navObject) => (
                <Link
                  key={navObject.menuLink}
                  onMouseEnter={() => handleHover(navObject)}
                  className={`${styles.navLink} ${
                    activeMenu === navObject.menuLabel ? styles.activeLink : ''
                  }`}
                  to={navObject.menuLink}
                >
                  {navObject.menuLabel}
                </Link>
              ))}
            </nav>
          </div>
          <div role={'presentation'}
            onClick={() => setMobileMenu(!mobileMenu)}
            className={styles.burgerIcon}
          >
            <Icon symbol={`${mobileMenu === true ? 'cross' : 'burger'}`}></Icon>
          </div>

          <Brand />

          <div className={styles.actionContainers}>
            <Button level={'levelGreen'} size={'thin'} >
              LINEでお問い合わせ
            </Button>
            <button className={`${styles.iconButton} ${styles.iconContainer} ${styles.bagIconContainer}`}>
              <Icon symbol={'x-skeleton'}></Icon>
            </button>
          </div>

          <div className={styles.actionMobileContainers}>
            {/* <button className={`${styles.iconButton} ${styles.iconContainer} ${styles.bagIconContainer}`}>
              <Icon symbol={'line'}></Icon>
            </button> */}
            <button className={`${styles.iconButton} ${styles.iconContainer} ${styles.bagIconContainer}`}>
              <Icon symbol={'x'}></Icon>
            </button>
          </div>


        </div>
      </Container>
      

      <div className={styles.mobileMenuContainer}>
        <Drawer
          hideCross
          top={'5.5rem'}
          isReverse
          visible={mobileMenu}
          close={() => setMobileMenu(false)}
        >
          <MobileNavigation close={() => setMobileMenu(false)} />
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
