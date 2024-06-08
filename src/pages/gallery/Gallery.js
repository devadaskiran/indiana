import React from 'react';
import Image from 'next/image';
import { MainLayout } from 'layout';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom'
import { Container } from 'components';
import styles from './Gallery.module.scss';

const Gallery = ({handleHome, handleAbout, handleVision, handleMission, handleGallery, handleContact}) => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <MainLayout handleHome={handleHome} handleAbout={handleAbout} handleVision={handleVision} handleMission={handleMission} handleGallery={handleGallery} handleContact={handleContact} >
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <h1>
            Gallery
          </h1>
        </div>
        <Container>
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a href='/images/811A0163.jpeg'>
              <Image src='/images/811A0163.jpeg' alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants."/>
            </a>
            <a href='/images/811A0508.jpeg'>
              <Image alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants." src='/images/811A0508.jpeg'/>
            </a>
            <a href='/images/811A0163.jpeg'>
              <Image src='/images/811A0163.jpeg' alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants."/>
            </a>
            <a href='/images/811A0508.jpeg'>
              <Image alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants." src='/images/811A0508.jpeg'/>
            </a>
            <a href='/images/811A0163.jpeg'>
              <Image src='/images/811A0163.jpeg' alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants."/>
            </a>
            <a href='/images/811A0508.jpeg'>
              <Image alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants." src='/images/811A0508.jpeg'/>
            </a>
            <a href='/images/811A0163.jpeg'>
              <Image src='/images/811A0163.jpeg' alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants."/>
            </a>
            <a href='/images/811A0508.jpeg'>
              <Image alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants." src='/images/811A0508.jpeg'/>
            </a>
            <a href='/images/811A0163.jpeg'>
              <Image src='/images/811A0163.jpeg' alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants."/>
            </a>
            <a href='/images/811A0508.jpeg'>
              <Image alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants." src='/images/811A0508.jpeg'/>
            </a>
            <a href='/images/811A0163.jpeg'>
              <Image src='/images/811A0163.jpeg' alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants."/>
            </a>
            <a href='/images/811A0508.jpeg'>
              <Image alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants." src='/images/811A0508.jpeg'/>
            </a>
            <a href='/images/811A0163.jpeg'>
              <Image src='/images/811A0163.jpeg' alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants."/>
            </a>
            <a href='/images/811A0508.jpeg'>
              <Image alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants." src='/images/811A0508.jpeg'/>
            </a>
            <a href='/images/811A0163.jpeg'>
              <Image src='/images/811A0163.jpeg' alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants."/>
            </a>
            <a href='/images/811A0508.jpeg'>
              <Image alt="INDFEST 2024 was a dynamic celebration of our nation's cultural tapestry, showcasing diverse talents and fostering unity among participants." src='/images/811A0508.jpeg'/>
            </a>
          </LightGallery>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Gallery;
