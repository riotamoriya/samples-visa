import React from 'react';
import {Container, Row } from 'react-bootstrap';

import * as styles from './ListArticle.module.scss';


const ListArticle = ({title, articles, bgColor, titleColor, children}) => {
  // 背景色に基づいたクラス名を決定する関数
  const bgColorClass = color => {
    switch (color) {

      case 'lightGreen':
        return styles.rootLightGreen;

      case 'green':
        return styles.rootGreen;

      case 'deepGreen':
        return styles.rootDeepGreen;

      default:
        return '';
    }
  };

  const titleColorClass = color => {
    switch (color) {
      case 'black':
        return styles.titleBlack;
      case 'white':
        return styles.titleWhite;
      default:
        return styles.titleBlack;
    }
  };
  

  return (
      <div className={`${styles.root} ${bgColorClass(bgColor)}`}>
      <Container className={styles.container}>
        <Row>
          <div className={styles.title}>{title}</div>
        </Row>
        <hr /> {/* 水平線を追加 */}

        {articles.map((article, index) => (
          <Row key={index}>
            <h1 className={`${styles.articleTitle} ${titleColorClass(titleColor)}`}>
              {article.title}
            </h1>
            <h2 className={`${styles.articleContents}`}>
              {article.contents}
            </h2>
            {
              index !==  articles.length - 1 ? <hr /> : null
            }
          </Row>
        ))}

        {children}
        
      </Container>


    </div>
  );
  
};

export default ListArticle;
