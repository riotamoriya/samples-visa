import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';


const IntroducePage = (props) => {
  return (
    <Layout withFooter = {false} >

      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'introduce'}
              title={'あなたの代名詞をつくろう。'}
              image={'/_DSC1775.jpg'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  職人のご紹介
                </p>
                <p className={styles.blogParagraph}>
                  たとえ良い革を用いても良いバッグが出来るとは限りません。<br/>
                  革にもそれぞれ特徴がありそれを生かすのが職人の仕事です。
                </p>
                <p className={styles.blogParagraph}>
                  
                </p>
                <p className={styles.blogParagraph}>
                ”革の声を聞くこと”が大事なのです。時に革に無理をさせず、時に革を躾けることが良いバッグを作るコツです。<br/>
                そしてどれだけ詳細に考えられるか例えば手や肩で持った時の荷重のかかり方、その方向、等ANZZAではご注文頂いたお客様のご要望に答えるのが仕事ではありますが
                </p>

                <p className={styles.blogParagraph}>
                  お客様がお気付きになられなかったことへのアドバイスやご提案なども職人の仕事と考えております。
                </p>
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                <img src={'/_DSC1602.jpg'} alt={'sample1'} />

                </div>
                <div className={styles.imageContainer}>
                  <img src={'/_DSC1749.jpg'} alt={'sample1'} />
                </div>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default IntroducePage;
