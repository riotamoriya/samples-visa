import React from 'react';

import * as styles from './Sentence.module.css';

const Sentence = ({title, p_contents, children}) => {

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>{title}</h4>
        <p>
          {p_contents}
        </p>
      </div>
      <div className={styles.section}>
        { children }
      </div>
    </div>
  );
};

export default Sentence;
