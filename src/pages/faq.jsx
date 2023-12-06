import React from 'react';

import Layout from '../components/Layout/Layout';

import FaqList from '../components/FaqList';

import Config from '../config.json';


import * as styles from './faq.module.scss';


import './App.scss';

// import SEO from '../components/SEO';

const FaqPage = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <FaqList
          faqs = {Config.faqs}
        />
      </div>
    </Layout>
  );
};

export default FaqPage;

// export const Head = () => {
//   return <SEO pathname={'/'}></SEO>
// }
