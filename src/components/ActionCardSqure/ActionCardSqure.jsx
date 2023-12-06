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
            icon={'user'}
            subtitle={'ヒアリングさせていただき、お客様に合わせて手順のご説明をいたします。'}
          />

          <ActionCard
            title={'②学習機関'}
            icon={'bag'}
            subtitle={'火星、ノヴァマルティアは地球環境と大きく違います。最低限の知識を最高効率で取得できる環境を用意しています。'}
            link={'/shop'}
          />

          <ActionCard
            title={'③書類作成・手続き開始'}
            icon={'user'}
            subtitle={'必要書類の作成。その後イミグレーション及び関係所にて申請開始。'}
            link={'/account/settings'}
          />

          <ActionCard
            title={'④パスポートご返却'}
            icon={'bag'}
            subtitle={'全ての手続きが完了しVISA取得確認後、パスポートをご自宅にお届け致します。'}
            link={'/shop'}
          />

        </div>
        
      </Container>

    </div>
  );
  
};

export default ActionCardSqure;
