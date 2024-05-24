import React from 'react';

import { Avatar, Container } from 'components';
import aboutImage from 'assets/images/school-imag3.jpeg';
import signature from 'assets/images/signature.png';
import chairman from 'assets/images/chairman_img.png';
import styles from './EduMsg.module.scss';
import { CREW_DATA } from 'data/Strings';

const EduMsg = () => {
  if (!CREW_DATA || CREW_DATA.length === 0) {
    return null;
  }

  const firstPersonData = CREW_DATA[0];
  return (
    <div className={styles.wrapper}>
      <Container className="d-flex flex-column gap-4">
        <div className={styles['image-wrapper']}>
          <img src={aboutImage} alt='Indiana Public School, Attingal, Trivandrum.'  />
          {/* <RubberSRedefining Educationeal className={styles.seal} text="Indiana Public School, Attingal, Trivandrum."/>  */}
        </div>
        <div className={`d-flex pb-2 ${styles['text-wrapper']}`}>
          <h2 className='mb-1'>
            Revolutionizing education through systematic academics - Redefining Education...
          </h2>
          <p>
            Education is the foundation upon which any change is built. The 21st century poses many challenges that require new method and approach to develop a child to explore. We believe that a child’s education is a shared process where home and school work in partnership for the mutual benefit of the child. The goal of the school is to develop its pupils educationally and morally to their full potential and help them to become informed human beings equipped to take their place in the community as responsible citizens. We genuinely strive to value our children as individuals - each with his / her own unique personalities. With your support, our confident team will surely set high standards in the field of education in the times to come... At INDIANA, we believe that the strength in our class room lies in collaboration of learners... not in the knowledge of one Expert. As Aristotle said “Educating the mind without educating the heart is not Education “. Even as we impart education to match the advancement in technology and processes, we guide our children towards the right principles, ethics and moral values. We offer our students a stress-free learning environment which encourages creativity and critical thinking. Our unique teaching and learning process with a proper blend of theory and practice crosses the boundaries of nation towards global excellence. We are always open to refreshing views and suggestions which can add more value to the students of our school.
          </p>
          <div className={`d-flex ${styles['avatar-sign-wrapper']}`}>
            <div className='d-flex'>
              <img src={chairman} alt='Chairman of Indiana Public School' className={styles['avatar-image']}/>
              <Avatar photo={firstPersonData.img} fullName={firstPersonData.name} designation={firstPersonData.designation} />
            </div>
            <img src={signature} className={styles.sign} alt='Signature of Sudharshanan'/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EduMsg;
