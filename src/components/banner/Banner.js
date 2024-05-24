import React from 'react';

import Slider from "react-slick";

import { Container } from 'components';
import { BANNER_DATA } from 'data/Strings';
import styles from './Banner.module.scss';

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        {BANNER_DATA.map((slide) => (
          <div key={slide.id} className={styles['slide-wrapper']}>
            <Container>
              <div className={styles['banner-text']}>
                <h1>
                  Welcome to <span>Indiana Public School</span> <small>- The Ultimate Dream of a Visionary for Promoting Global Excellence -</small>
                </h1>
                <p>{slide.subheading}</p>
              </div>
              <div className={styles['banner-image']}>
                <img src={slide.image} alt={`Indiana Public School ${slide.id}`} />
              </div>
            </Container>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
