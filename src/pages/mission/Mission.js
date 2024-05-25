import React from 'react';
import { MainLayout } from 'layout';
import { Container } from 'components';
import styles from './Mission.module.scss';

const Mission = ({handleHome, handleAbout, handleVision, handleMission, handleGallery, handleContact}) => {
  return (
    <MainLayout handleHome={handleHome} handleAbout={handleAbout} handleVision={handleVision} handleMission={handleMission} handleGallery={handleGallery} handleContact={handleContact} >
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <h1>
            Mission
          </h1>
        </div>
      <Container>
        <p>
        To seek exceptionally promising students of all backgrounds from across the state and around the
nation and to educate them through mental discipline and social experience to develop their
intellectual, moral civic and create capacities to the fullest.
        </p>
      </Container>
      </div>
    </MainLayout>
  );
};

export default Mission;
