import React from 'react';

import Layout from '../components/Layout/Layout';

import Article1 from '../components/Article1';

import * as styles from './service-types.module.scss';
import './App.scss';


const ServiceTypesPage = () => {

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <div  className={styles.messageContainer}>
          <Article1
            title={`サービス内容`}
            contents={
              `・ビザ取得代行\n・会社設立代行\n`}
            btnText = 'お問い合わせ'
            style = {`green`}
            btnLevel='levelWhite'
          />
        </div>
      </div>
    </Layout>
  );
};

export default ServiceTypesPage;

// export const Head = () => {
//   return <SEO title={`サービス内容`} pathname={`/service-types`}></SEO>
// }
