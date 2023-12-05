import React from 'react';
import { Container, Row } from 'react-bootstrap';

// import * as styles from './ListArticle2.module.scss';

import * as styles from './notice2.module.scss';




const ListArticle2 = ({title, articles, color, children}) => {

  return (
      <div className={`${styles.root}`}>
      <Container className={styles.container}>

        {articles.map((article, index) => (
          
          <Row key={index}>
            <img src={article.assetsSrc} className={styles.articleImage} alt='a'></img>

            <h1 className={styles.articleTitle}>
              {article.title}
            </h1>
            <h3 className={styles.articleContents}>
              {article.contents}
            </h3>
            {
              index !==  articles.length - 1 ? <hr className={styles.articleSeparator} /> : null
            }

          </Row>
        ))}

        {children}
        
      </Container>


    </div>
  );
  
};

export default ListArticle2;
