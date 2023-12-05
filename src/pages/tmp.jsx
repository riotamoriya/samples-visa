import React from 'react';

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

import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


// import SEO from '../components/SEO';

const IndexPage = ({data}) => {

  const all_explanations = data.allMdx.edges;

  
  // console.log(data)
  // console.log(mdx_edges)

  

  return (
    <Layout disablePaddingBottom>
      
        <div className={styles_a.collectionContainer}>
          <ListArticle2
            articles={Config.explanations} mdx_nodes={all_explanations}
          ></ListArticle2>
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
