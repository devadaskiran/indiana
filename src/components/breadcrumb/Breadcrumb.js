import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.scss';

const Breadcrumb = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb" className={styles.wrapper}>
      <ul className={styles['breadcrumb-list']}>
        {paths.map((path, index) => (
          <li className={styles['breadcrumb-item']} key={index}>
            {index > 0 && <span className={styles['breadcrumb-separator']}>&gt;</span>}
            {index === paths.length - 1 ? (
              <span aria-current="page" className={styles['current-page']} title={path.title}>
                {path.title}
              </span>
            ) : (
              <Link to={path.url} title={path.title}>
                {path.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
