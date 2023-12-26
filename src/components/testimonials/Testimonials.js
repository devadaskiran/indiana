import React from 'react';
import Slider from "react-slick";
import { Container, StarRating } from 'components';
import styles from './Testimonials.module.scss';
import { TESTIMONIALS_DATA } from 'data/Strings'; // Import your testimonials data

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.wrapper}>
      <h2>What our beloved parents say</h2>
      <Slider {...settings}>
        {TESTIMONIALS_DATA.map((testimonial, index) => (
          <div key={index} className={styles['slide-wrapper']}>
            <Container>
              <div className={styles.card}>
                <div className={styles['avatar-wrapper']}>
                  <img src={testimonial.photo} alt='Parents Avatar' />
                </div>
                <div className={styles['text-wrapper']}>
                  <StarRating rating={testimonial.rating} />
                  <p>{testimonial.quote}</p>
                  <h3>
                    {testimonial.name}, <span>{testimonial.location}</span>
                  </h3>
                </div>
              </div>
            </Container>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
