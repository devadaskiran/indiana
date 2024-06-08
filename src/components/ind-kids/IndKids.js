import React, { useEffect, useRef } from 'react';
import styles from './IndKids.module.scss';
import videoSrc from '../../../public/videos/Swing_Kid_Playground.mp4';
import Container from 'components/container';

const EduMsg = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playPromise = videoRef.current.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
      });
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles['inner-wrapper']}>
      <Container className="d-flex align-items-center">
          <div className={styles['logo-container']}>
            <Image src="/images/logo.png" alt='Logo of Indiana Public School, Attingal'/>
            <h1>
              INDKIDS
            </h1>
            <h5>
              International Montessori Pre-School
            </h5>
            <p>
              -  A pathway to the world stage  -
            </p>
          </div>
          <ul className='d-flex list-style-none justify-content-center gap-2'>
            <li>
              ATTINGAL
            </li>

            <li>
              CHIRAYINKEEZHU
            </li>
            <li>
              VAKKOM
            </li>
            <li>
              KILIMANOOR
            </li>
          </ul>
          <p className={styles.description}>
            INDKIDS is a child-centric concept to develop the young buds
            to compete to the best outskirts of the International scenario of
            learning. At INDKIDS, children thrive in a dynamic environment
            designed to ignite the curiosity and foster independence.
            Guided by trained educators, they explore hands - on materials,
            collaborate with peers, and engage in purposeful activities
            tailored to their individual interests. INDKIDS always blends
            the value proposition - Learning to Life Skills.
            Beyond academics, INDKIDS nurtures social - emotional
            development, instilling the values of respect, empathy and
            responsibility. Through joyful learning experiences and
            meaningful connections, children emerge from this environment
            equipped with the skills, confidence and love for learning that
            will serve them well throughout their lives.
          </p>
        </Container>
      </div>
      <video ref={videoRef} height="100%" width="100%" autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default EduMsg;
