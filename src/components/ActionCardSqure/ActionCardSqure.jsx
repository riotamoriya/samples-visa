import React from 'react';
import { Container } from 'react-bootstrap';

import ActionCard from '../ActionCard';

import * as styles from './ActionCardSqure.module.scss';

const ActionCardSqure = () => {

  return (
    <div className={`${styles.root}`}>
      <Container className={styles.container}>
        <div className={styles.title}>
          VISA取得の流れ
        </div>


        <div className={styles.actionContainer}>
          <ActionCard
            title={'①お問い合わせ・申請'}
            icon={'user'}
            subtitle={'公式LINEにてお問い合わせ、お見積もり等対応しております。お気軽にお問い合わせください。'}
          />

          <ActionCard
            title={'②パスポート集荷'}
            icon={'bag'}
            subtitle={'ご自宅まで配送ドライバーが集荷に伺います。遠方の場合郵送でも対応しております。'}
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
