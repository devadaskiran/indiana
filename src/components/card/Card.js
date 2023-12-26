import React from 'react';

import styles from './Card.module.scss';

const Card = ({ children, className, style }) => {
  return (
    <div className={`card-global ${styles.wrapper} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
