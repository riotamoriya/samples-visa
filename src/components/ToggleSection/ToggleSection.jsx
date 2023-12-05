
import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

import * as styles from './ToggleSection.module.scss';


import Switch from 'react-switch';

const ToggleButton = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (checked) => {
    setChecked(checked);
  };
  return (
    <label>
      <Switch onChange={handleChange} checked={checked} />
    </label>
  );
};





const ToggleSection = ({ title, contents, cookiePolicy, privacyPolicy }) => {

  return (
    <div className={styles.root}>
      <div className={styles.toggleButton}>
        <ToggleButton />
      </div>

      <div className={styles.sentence}>
        <p className={styles.title}>
          {title}
        </p>

        <p className={styles.contents}>
          {contents}
        </p>

        <div className={styles.links}>
          {cookiePolicy && (
            <a href={cookiePolicy} target="_blank" rel="noopener noreferrer">Cookie ポリシー</a>
          )}
          {privacyPolicy && (
            <a href={privacyPolicy} target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>
          )}
        </div>


      </div>


    </div>
  );
};

export default ToggleSection;

