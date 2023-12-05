import React from 'react';
import Button from '../Button';

import * as styles from './Article1.module.scss';

const Article1 = ({title, contents, btnText, btnLevel='levelGreen', style}) => {

  const bgColorClass = style => {
    switch (style) {
      case 'green':
        return styles.greenStyle;
      default:
        return '';
    }
  };
  

  return (
    <div className={`${styles.root} ${bgColorClass(style)}`}>
      <h1 className={styles.title}>
        {title}
      </h1>

      <h2 className={styles.contents}>
        {contents}
      </h2>

      {
        btnText && 
          <Button level={btnLevel} size={'basic'}>
            {btnText}
          </Button>
      }

    </div>
  );
};

export default Article1;
