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

  const mdx = ars[1];

  // const mdx_image = getImage(mdx.node.frontmatter.image);
  // const mdx_title = mdx.node.frontmatter.title;
  // const mdx_alt = mdx.node.frontmatter.image_alt;
  // const mdx_body = mdx.node.body;

  console.log(mdx);

  return (
      <div className={`${styles2.root}`}>

      <Container className={styles2.container}>

        {articles.map((article, index) => (
          
          <Row key={index}>
            <img src={article.assetsSrc} className={styles2.articleImage} alt='a'></img>

             <GatsbyImage
               image={mdx_image}
               alt={mdx_alt}
               className={styles2.articleImage}
             />

             <h1 className={styles2.articleTitle}>
               {mdx_title}
             </h1>
             <h3 className={styles2.articleContents}>
               {mdx_body}
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

  const noticeImages = data.allMdx.edges;
  // console.log(noticeImages)

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
            <ListArticle22 articles={Config.notices} ars={noticeImages} />
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
      filter: { frontmatter: { type: { eq: "notices" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
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
`

// export const Head = () => {
//   return <SEO title={'お知らせ'} pathname={'/notice'}></SEO>
// }
