import React from 'react';
import { Container, Row } from 'react-bootstrap';

import MyContainer from '../components/Container';

import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


import * as styles from './notice.module.scss';
import * as styles2 from './notice2.module.scss';


// import SEO from '../components/SEO';


const ListArticle = ({ mdx_nodes, children }) => {

  return (
    <div className={`${styles2.root}`}>
      <Container className={styles2.container}>

        {mdx_nodes.map((mdx, index) => 
          (
            <Row key={index}>
              <GatsbyImage
                image={getImage(mdx.node.frontmatter.image)}
                alt={mdx.node.frontmatter.image_alt}

                className={styles2.articleImage}
              />

              <h1 className={styles2.articleTitle}>
                {mdx.node.frontmatter.date}
              </h1>
              <h3 className={styles2.articleContents}>
                {mdx.node.body}
              </h3>
              {
                index !== mdx_nodes.length - 1 ? <hr className={styles2.articleSeparator} /> : null
              }
            </Row>
          )
        )}

        {children}

      </Container>


    </div>
  );

};




const NoticePage = ({ data }) => {

  const noticeImages = data.allMdx.edges;

  return (
    <Layout disablePaddingBottom>
   
      <div className={styles.root}>
        <MyContainer size={'large'} spacing={'min'}>
          <div className={styles.contents}>
            <h3 className={styles.title}>お知らせ</h3>
            <ListArticle mdx_nodes={noticeImages} />
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
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
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
`

// export const Head = () => {
//   return <SEO title={'お知らせ'} pathname={'/notice'}></SEO>
// }