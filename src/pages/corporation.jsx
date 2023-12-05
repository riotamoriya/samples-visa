import React from 'react';

import Layout from '../components/Layout/Layout';

import { Container, Row } from 'react-bootstrap';

import Config from '../config.json';

import * as styles from './corporation.module.scss';

import './App.scss';


const ListComponent = ({title, articles, children}) => {
  return (
      <div className={`${styles.listContainer}`}>
      <Container className={styles.container}>
        <Row>
          <div className={styles.title}>{title}</div>
        </Row>

        {articles.map((article, index) => (
          <Row key={index}>
            <h1 className={`${styles.articleTitle}`}>
              {article.title}
            </h1>
            <h2 className={`${styles.articleContents}`}>
              {article.contents}
            </h2>
            {
              index !==  articles.length - 1 && <hr /> 
            }
          </Row>
        ))}

        {children}
        
      </Container>

    </div>
  );
  
};


const CorporationPage = () => {
  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <ListComponent
          title={''}
          articles={Config.basicInfomation}
          bgColor='green'
        >
        </ListComponent>
      </div>
    </Layout>
  );
};

export default CorporationPage;

// export const Head = () => {
//   return <SEO title={'会社概要'} pathname={'/corporation'}></SEO>

// }
