import React from 'react';
import styles from './Button.module.scss';

const Button = ({ className, label, variant, size, color, onClick }) => {
  const classNames = [
    className,
    styles.wrapper,
    variant === 'rounded' ? styles.rounded : variant === 'outlined' ? styles.outlined : variant === 'rounded-outlined' ? styles['rounded-outlined'] : styles.default,
    size === 'sm' && styles.small,
    color === 'error' ? styles['color-error'] : color === 'secondary' ? styles['color-secondary'] : color === 'primary' ? styles['color-primary'] : color === 'success' ? styles['color-success'] : color === 'info' ? styles['color-info'] : color === 'warning' ? styles['color-warning'] : styles['color-inherit'],
  ];

  const filteredClassNames = classNames.filter(Boolean).join(' ');

  return (
    <button className={filteredClassNames} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
