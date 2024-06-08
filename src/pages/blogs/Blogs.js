import React from 'react';
import { MainLayout } from 'layout';
import { Container } from 'components';
import styles from './Blogs.module.scss';

const Blogs = ({ handleHome, handleAbout, handleVision, handleMission, handleGallery, handleContact }) => {
  return (
    <MainLayout handleHome={handleHome} handleAbout={handleAbout} handleVision={handleVision} handleMission={handleMission} handleGallery={handleGallery} handleContact={handleContact} >
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <h1>
            Blogs
          </h1>
        </div>
        <Container>
          <p>
            Coming Soon
          </p>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Blogs;
