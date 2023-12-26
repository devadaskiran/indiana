import React from 'react';

import { Avatar, Container, RubberSeal } from 'components';
import aboutImage from 'assets/images/cute-little-indian-asian-kids-studying-study-table-with-pile-books-educational-globe-isolated-light-blue-colour.jpeg';
import signature from 'assets/images/signature.png';
import styles from './EduMsg.module.scss';

const EduMsg = () => {
  return (
    <div className={styles.wrapper}>
      <Container className="d-flex gap-4">
        <div className={styles['image-wrapper']}>
          <img src={aboutImage} alt='Indiana Public School, Attingal, Trivandrum.'  />
          <RubberSeal className={styles.seal} text="Indiana Public School, Attingal, Trivandrum."/>
        </div>
        <div className={`d-flex pb-2 ${styles['text-wrapper']}`}>
          <h2 className='mb-1'>
            Revolutionizing education through systematic academics
          </h2>
          <p>
            Embarking on a groundbreaking journey, Indiana Public School is revolutionizing education through meticulous and systematic academic practices. Our commitment is to redefine the learning experience, ensuring a transformative and progressive environment for all students.
          </p>
          <div className='d-flex'>
            <Avatar fullName="Sudharshanan" designation="Chairman"/>
            <img src={signature} className={styles.sign} alt='Signature of Sudharshanan'/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EduMsg;
