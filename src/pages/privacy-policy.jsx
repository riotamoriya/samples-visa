import React from 'react';
import { graphql } from 'gatsby'
import * as styles from './privacy-policy.module.scss';

import Layout from '../components/Layout/Layout';
import Container from '../components/Container';


const PrivacyPolicyPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.section}>
            <div className={styles.subSection}>
              <h2>プライバシーポリシー</h2>
              <pre>
                ALICE AGENCY Co.,Ltd.（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、お客様の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。 
              </pre>
            </div>
          </div>
          {
            data.allMdx.nodes.map((node) => (
              <div key={node.id} className={styles.section} >
                <div className={styles.subSection}>
                  <h3>{node.frontmatter.title}</h3>
                  {node.body.split('\n').map((line, index) => (
                    <pre key={index}>{line}</pre>
                  ))}

                </div>
              </div>
            ))
          }

        </Container>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          order
        }
        body
        id
      }
    }
  }
`;



export default PrivacyPolicyPage;

// export const Head = () => {
//   return <SEO title={'お知らせ'} pathname={'/notice'}></SEO>
// }


