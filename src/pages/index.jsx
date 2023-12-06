import React from 'react';
import { graphql } from 'gatsby'

import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';

import Article1 from '../components/Article1';

import FaqList from '../components/FaqList';

import ListArticle from '../components/ListArticle';
import ListArticle2 from '../components/ListArticle2';

import ActionCardSqure from '../components/ActionCardSqure';

import VideoSection from '../components/VideoSection';

import Config from '../config.json';


import * as styles_a from './index.module.scss';

import * as styles_b from './index2.module.css';


import './App.scss';

// import SEO from '../components/SEO';

const IndexPage = ({data}) => {
  const all_explanations = data.allMdx.edges;

  return (
    <Layout disablePaddingBottom>

      <div className={styles_b.root}>
        <Hero />

        <div  className={styles_a.messageContainer}>
          <Article1
            title={`ノヴァマルティアでの\n新規ビザ取得完全サポート!!\n`}
            contents={
              `ノヴァマルティア入国管理についての手続きを完全サポート。\n
              当局では、ビザ取得の需要増大にあたりサポート機能を強化・組織として分離。\n
              そして入国前から入国後までの期間、スムーズにことが進むよう徹底的に尽力いたします。`}
            btnText = 'gaLxで無料相談'
          />
        </div>

        <div className={` ${styles_a.videoContainer}`}>
          <VideoSection />
        </div>
    
        <div className={styles_a.collectionContainer}>
          <ListArticle2 mdx_nodes={all_explanations} />
        </div>
        
        <div  className={styles_a.collectionContainer}>
          <ListArticle
            title='渡航ビザ｀サービス'
            articles={Config.visaProxyServices}
          ></ListArticle>
        </div>

        {/* <div  className={styles_a.messageContainer}>
          <Article1
            title={`LINEで相談\n無料お見積もり`}
            btnText = {`公式LINE`}
          />
        </div> */}

        <div  className={styles_a.collectionContainer}>
          <ListArticle
            title={'その他サポート内容'}
            articles={Config.otherServices}
            bgColor='lightGreen'
            titleColor='black'
          >
            <p>twitter</p>
          </ListArticle>
        </div>

        <div className={styles_a.collectionContainer}>
          <ActionCardSqure/>
        </div>

        <div className={styles_a.messageContainer}>
          <Article1
            title={`よくあるご質問`}
            contents={
              `以下の他にも何か質問等あれば、\nどうぞお問い合わせください。`}
          />
        </div>

        <div className={styles_a.messageContainer}>
          <FaqList
            title={`FaqList`}
            faqs = {Config.faqs}
          />
        </div>

      </div>
    </Layout>
  );
};


export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { type: { eq: "explanations" } } }
      sort: { fields: [frontmatter___id], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            image_alt
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          body
        }
      }
    }
  }
`;

export default IndexPage;

// export const Head = () => {
//   return <SEO pathname={'/'}></SEO>
// }
