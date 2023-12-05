import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {

  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/my-collection1.png'}
        title={'オリジナルバッグ'}
        text={'SEE NOW'}
        link={'/originals'}
      />
      <ProductCollection
        image={'/collections/my-collection3-2-1.jpg'}
        title={'修理'}
        text={'SEE NOW'}
        link={'/repairs'}
      />
      
      <ProductCollection
        image={'/collections/my-collection4.webp'}
        title={'ランドセルリメイク'}
        text={'SEE NOW'}
        link={'/repairs/randsel-remake'}
      />

      <ProductCollection
        image={'/collections/my-collection2.jpg'}
        title={'フルオーダー'}
        text={'SEE NOW'}
        link={'/fullorder'}
      />




    </div>
  );
};

export default ProductCollectionGrid;
