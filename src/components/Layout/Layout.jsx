import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

import Footer from '../Footer';

import * as styles from './Layout.module.scss';

import './Globals.css';

const Layout = ({ children, disablePaddingBottom = false, withFooter = true }) => {
  return (
    <>
      <Header /> 
      <main
        className={`${styles.main} ${
          disablePaddingBottom === true ? styles.disablePaddingBottom : ''
        }`}
      >
        {children}
      </main>

      { withFooter && <Footer /> }
      {/* <Footer /> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Layout;