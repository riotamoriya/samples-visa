import React from 'react';
import { Container, Row } from 'react-bootstrap';

import * as styles from './ListArticle2.module.scss';

import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const ListArticle2 = ({ color, mdx_nodes, children}) => {

  // 背景色に基づいたクラス名を決定する関数
  const bgColorClass = color => {
    switch (color) {
      case 'green':
        return styles.rootGreen;
      // その他の色に対するケース
      default:
        return '';
    }
  };
  
  return (
    <div className={`${styles.root} ${bgColorClass(color)}`}>
      
      <Container className={styles.container}>

        {mdx_nodes.map((mdx, index) => (
          <Row key={index}>
            {/* <img src={article.assetsSrc} className={styles.articleImage} alt='a'></img> */}
            {/* <StaticImage src="../../assets/explanationImages/immediateResponse.webp" className={styles.articleImage} alt="brand-logo" /> */}
            <GatsbyImage
                image={getImage(mdx.node.frontmatter.image)}
                alt={mdx.node.frontmatter.image_alt}
                className={styles.articleImage}
              />

            <h1 className={styles.articleTitle}>
              {mdx.node.frontmatter.title}
            </h1>
            <h2 className={styles.articleContents}>
              {mdx.node.body}
            </h2>
            { index !==  mdx_nodes.length - 1 && <hr className={styles.articleSeparator} /> }
              {/* // index !==  articles.length - 1 ? <hr className={styles.articleSeparator} /> : null */}
          </Row>
        ))}

        {children}
      
      </Container>


    </div>
  );
  
};

export default ListArticle2;
