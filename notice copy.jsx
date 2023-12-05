import React from 'react';
import { Container, Row } from 'react-bootstrap';

import MyContainer from '../components/Container';
// import ListArticle2 from '../components/TMP';

import Config from '../config.json';

import Layout from '../components/Layout/Layout';
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


import * as styles from './notice.module.scss';
import * as styles2 from './notice2.module.scss';


// import SEO from '../components/SEO';



const ListArticle22 = ({title, articles, ars, color, children}) => {

  // console.log(ars);

  const mdx = ars[1];

  const image = getImage(mdx.node.frontmatter.hero_image);
  const alt = mdx.node.frontmatter.title;
  const body = mdx.node.body;


  return (
      <div className={`${styles2.root}`}>

      <Container className={styles2.container}>

        {articles.map((article, index) => (
          
          <Row key={index}>
            <img src={article.assetsSrc} className={styles2.articleImage} alt='a'></img>

            <h1 className={styles2.articleTitle}>
              {article.title}
            </h1>
            <h3 className={styles2.articleContents}>
              {article.contents}
            </h3>
            {
              index !==  articles.length - 1 ? <hr className={styles2.articleSeparator} /> : null
            }

          </Row>
        ))}

        {children}
        
      </Container>


    </div>
  );
  
};




const NoticePage = ({data}) => {


  const explanationImages = data.allMdx.edges;

  return (
    <Layout disablePaddingBottom>
          {/* <GatsbyImage
      image={image}
      alt={"aa"}
    /> */}

      {/* <MDXRenderer>{body}</MDXRenderer> */}

      <div className={styles.root}>
        <MyContainer size={'large'} spacing={'min'}>
          <div className={styles.contents}>
            <h3 className={styles.title}>お知らせ</h3>
            <ListArticle22 articles={Config.notices} ars={explanationImages} />
          </div>
        </MyContainer>
      </div>
    </Layout>
  );
};

export default NoticePage;


export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { type: { eq: "explanationImages" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            hero_image_alt
            hero_image {
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
`

// export const Head = () => {
//   return <SEO title={'お知らせ'} pathname={'/notice'}></SEO>
// }
