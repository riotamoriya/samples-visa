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

import FlashMessageModal from '../components/FlashMessageModal';
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
            title={`タイ滞在のビザ取得\n移住サポートは\nお任せください!!\n`}
            contents={
              `タイ入国管理局での申請に関する\nお悩み、ストレスを改善できますよう\n徹底サポート。\n\nお客様が、より快適かつスムーズに\nタイ生活をお送りできますよう\n尽力して参ります。\n`}
            btnText = 'LINEで無料相談'
          />
        </div>

        <div className={` ${styles_a.videoContainer}`}>
          <VideoSection />
          {/* video-container */}
        </div>
    
        <div className={styles_a.collectionContainer}>
          <ListArticle2 mdx_nodes={all_explanations} />
        </div>
        
        <div  className={styles_a.collectionContainer}>
          <ListArticle
            title='VISA代行内容'
            articles={Config.visaProxyServices}
          ></ListArticle>
        </div>

        <div  className={styles_a.messageContainer}>
          <Article1
            title={`LINEで相談\n無料お見積もり`}
            btnText = {`公式LINE`}
          />
        </div>

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

        <div  className={styles_a.collectionContainer}>
          <ActionCardSqure/>
        </div>

        <div className={styles_a.messageContainer}>
          <Article1
            title={`よくあるご質問`}
            contents={
              `お役に立てることがありましたら\nお気軽にお問い合わせくださいませ。`}
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
