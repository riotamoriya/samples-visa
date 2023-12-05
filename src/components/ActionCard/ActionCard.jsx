import React from 'react';
import * as styles from './ActionCard.module.scss';

const ActionCard = ({ title, subtitle}) => {
  
  return (
    <div
      className={styles.root}
      role={'presentation'}
    >
      <span className={styles.actionName}>{title}</span>
      <span className={styles.link}>
        {subtitle}
      </span>
    </div>
  );
};

export default ActionCard;
