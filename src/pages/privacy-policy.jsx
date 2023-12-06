import React from 'react';
import { graphql } from 'gatsby'
import * as styles from './privacy-policy.module.scss';

import Layout from '../components/Layout/Layout';
import Container from '../components/Container';


const PrivacyPolicyPage = ({ data }) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.section}>
            <div className={styles.subSection}>
              <h2>プライバシーポリシー</h2>
              <pre>
                Nova Martia Office（以下、「当機関」といいます。）は、火星渡航ビザサポート部門（以下、「本部門」といいます。）における、お客様の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
              </pre>
            </div>
          </div>
          {
            data.allMdx.edges.map((edge) => {
              return (
                <>
                  <div key={edge.node.id} className={styles.section} >
                    <h3>{edge.node.frontmatter.title}</h3>
                    {edge.node.body.split('\n').map((line, index) => (
                      <pre key={index}>{line}</pre>
                    ))}
                  </div>
                </>
              )
            })
          }
        </Container>
      </div>
    </Layout>
  );
};


export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { type: { eq: "policy" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
          }
          body
        }
      }
    }
  }
`


export default PrivacyPolicyPage;

// export const Head = () => {
//   return <SEO title={'お知らせ'} pathname={'/notice'}></SEO>
// }


