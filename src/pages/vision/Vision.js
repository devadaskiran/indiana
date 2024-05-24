import React from 'react';
import { MainLayout } from 'layout';
import { Container } from 'components';
import styles from './Vision.module.scss';

const Vision = () => {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <h1>
            Vision
          </h1>
        </div>
        <Container>
          <p>
            To develop well-rounded, confident and responsible individuals who are aspire to achieve their full
            potential by providing a welcoming, happy, safe and supportive learning environment in which
            everyone is equal and all achievements are celebrated.
          </p>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Vision;
