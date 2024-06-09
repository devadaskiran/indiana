import React from 'react';
import styles from './Avatar.module.scss';

const Avatar = ({ fullName, designation, photo }) => {
  const firstLetter = fullName ? fullName.charAt(0).toUpperCase() : '';

  return (
    <div className={`d-flex align-items-center avatar-global  ${styles.wrapper}`}>
      <div className={`d-flex align-items-center justify-content-center avatar-photo-global ${styles.photo}`}>
        {photo ? (
          <img src={photo} alt={`Avatar of ${fullName}`} />
        ) : (
          firstLetter
        )}
      </div>
      <div className={styles['text-wrapper']}>
        <h3>{fullName}</h3>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default Avatar;
