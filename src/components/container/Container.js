import React from 'react';

import styles from './Container.module.scss';

const Container = ({ children, className }) => {
  return (
    <div className={`container-global ${styles.container} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
