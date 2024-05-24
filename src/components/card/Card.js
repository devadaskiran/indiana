import React from 'react';

import styles from './Card.module.scss';

const Card = ({ children, className, style, onClick }) => {
  return (
    <div className={`card-global ${styles.wrapper} ${className}`} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
