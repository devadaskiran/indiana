import React from 'react';

import Slider from "react-slick";

import { Container } from 'components';
import schoolImage from 'assets/images/smart-indian-schoolgirl-rising-arm-answering-question-class.jpeg';
import styles from './Banner.module.scss';

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        <div className={styles['slide-wrapper']}>
          <Container>
            <div className={styles['banner-text']}>
              <h1>
                Welcome to <span>Indiana Public School</span>
              </h1>
              <p>
                Indiana Public School is Attingal's exclusive English school, providing quality education from Pre-KG to 12th grade following the CBSE curriculum. As the only complete school in Attingal, we are dedicated to fostering academic excellence and holistic development for our students.
              </p>
            </div>
            <div className={styles['banner-image']}>
              <img src={schoolImage} alt='Indiana Public School, Attingal, Trivandrum.' />
            </div>
          </Container>
        </div>
        <div className={styles['slide-wrapper']}>
          <Container>
            <div className={styles['banner-text']}>
              <h1>
                Welcome to <span>Indiana Public School</span>
              </h1>
              <p>
                Indiana Public School is Attingal's exclusive English school, providing quality education from Pre-KG to 12th grade following the CBSE curriculum. As the only complete school in Attingal, we are dedicated to fostering academic excellence and holistic development for our students.
              </p>
            </div>
            <div className={styles['banner-image']}>
              <img src={schoolImage} alt='Indiana Public School, Attingal, Trivandrum.' />
            </div>
          </Container>
        </div>
      </Slider>

    </div>
  );
};

export default Banner;
