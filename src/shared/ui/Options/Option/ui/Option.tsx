import React from 'react';
import styles from './Option.module.css';
export const Option = ({ option, ...otherProps }: any) => {
  return (
    <div {...otherProps} className={styles.option}>
      <div className={styles.option__description}>
        <span className={styles.option__title}>{option.name}</span>
        <span className={styles.option__subtitle}>{option.fullName}</span>
      </div>
      <img
        className={styles.option__img}
        src={option.flag}
        alt={'country flag'}
      />
    </div>
  );
};
