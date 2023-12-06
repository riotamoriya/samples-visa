import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

import Footer from '../Footer';

import FlashMessageModal from '../FlashMessageModal';


import * as styles from './Layout.module.scss';

import './Globals.css';

const Layout = ({ children, disablePaddingBottom = false}) => {
  return (
    <>
      <Header /> 
      <main
        className={`${styles.main} ${
          disablePaddingBottom === true ? styles.disablePaddingBottom : ''
        }`}
      >
        <FlashMessageModal />
        {children}
      </main>

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Layout;