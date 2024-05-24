import React, { useEffect } from 'react';
import styles from './Modal.module.scss';
import { CloseIcon } from 'assets/icons';

const Modal = ({ children, onClose, image }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      // Remove 'no-scroll' class from body when modal is closed
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`${styles.backdrop} ${image ? styles['has-image'] : ''}`} onClick={handleBackdropClick}>
      <div className={styles.content}>
        <button className={styles.close} onClick={onClose}>
          <CloseIcon/>
        </button>
        {image &&
          <div className={styles['img-wrapper']} style={{ backgroundImage: `url(${image})` }} />
        }
        <div className={styles['form-wrapper']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
