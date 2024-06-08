import React, { useEffect } from 'react';
import styles from './Modal.module.scss';
import { CloseIcon } from 'assets/icons';

const Modal = ({ children, onClose, image, className }) => {
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
    <div className={`${styles.backdrop} ${className} ${image ? styles['has-image'] : ''}`} onClick={handleBackdropClick}>
      <div className={styles.content}>
        <button className={styles.close} onClick={onClose}>
          <CloseIcon/>
        </button>
        {image &&
          <Image src={image} alt='Logo of Indiana Public School, Attingal'/>
        }
        <div className={styles['form-wrapper']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
