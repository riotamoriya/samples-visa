import React from 'react';
import Accordion from '../Accordion';

import * as styles from './FaqList.module.scss';

const FaqList = ({faqs}) => {

  return (
    <div className={styles.root}>
      {
        faqs.map((faq, index) => (
          <Accordion
            key={index}
            customStyle={styles}
            type={'add'}
            title={faq.title}
          >
            {faq.contents}
          </Accordion>
        ))
      }
    </div>
  );
};

export default FaqList;
