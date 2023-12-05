import React from 'react';
import * as styles from './Hero.module.scss';
import Button from '../Button';
import { Link } from 'gatsby';

const Hero = (
  {
    title,
    subtitle,
    ctaText,
    image,
    maxWidth,
    ctaLink,
    ctaTo,
    header,
  }

) => {
  
  return (
      <div className={styles.root} style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

      <div className={styles.content} style={{ maxWidth: maxWidth }}>
        {/* {header && <span className={styles.header}>{header}</span>} */}

        {title && 
          <h2 className={styles.sublitle}>
            タイのVISA相談窓口
          </h2>}
        {title && <h2 className={styles.title}>{title}</h2>}

        {subtitle && <span className={styles.sentence}>{subtitle}</span>}
        {ctaText && (
          <Button level={'primary'} size={'basic'} disabled={true}>
            LINEで無料相談
          </Button>
        )}
        {ctaLink && (
          <Link className={styles.ctaLink} to={ctaTo}>
            {ctaLink}
          </Link>
        )}
      </div>

    </div>
  );
};

export default Hero;
