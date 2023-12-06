import React from 'react';
import { Container } from 'react-bootstrap';

import ActionCard from '../ActionCard';

import * as styles from './ActionCardSqure.module.scss';

const ActionCardSqure = () => {

  return (
    <div className={`${styles.root}`}>
      <Container className={styles.container}>
        <div className={styles.title}>
          ワークフロー
        </div>


        <div className={styles.actionContainer}>
          <ActionCard
            title={'①初期相談'}
            // icon={'user'}
            subtitle={'ヒアリングさせていただき、お客様に合わせて手順のご説明をいたします。'}
          />

          <ActionCard
            title={'②学習期間'}
            // icon={'bag'}
            subtitle={'火星、ノヴァマルティアは地球環境と大きく違います。最低限の知識を最高効率で取得できる環境を用意しています。'}
            // link={'/shop'}
          />


          <ActionCard
            title={'③書類作成・手続き開始'}
            // icon={'user'}
            subtitle={'必要書類の作成：お客様の火星渡航に必要な書類を作成します。これには、健康診断書、火星滞在許可申請書、および火星コロニーへの滞在計画などが含まれます。'}
            // link={'/account/settings'}
          />

          <ActionCard
            title={'④スペーストラベルIDのご返却'}
            // icon={'bag'}
            subtitle={'全ての手続き完了後：火星ビザおよびスペーストラベルID（宇宙旅行用の身分証明書）の取得が確認され次第、これらの書類をお客様の地球上の住所にお届けします。'}
            // link={'/shop'}
          />

        </div>
        
      </Container>

    </div>
  );
  
};

export default ActionCardSqure;
