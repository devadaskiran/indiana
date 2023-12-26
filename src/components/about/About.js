import React from 'react';


import { Container, Card, Button } from 'components';
import { RightArrowIcon } from 'assets/icons';
import ABOUT_DATA from 'data/Strings';
import styles from './About.module.scss';

const About = () => {
  const { cards } = ABOUT_DATA;
  return (
    <div className={styles.wrapper}>
      <Container>
        <h2 dangerouslySetInnerHTML={{ __html: ABOUT_DATA.title }}></h2>
        <div className={`justify-content-center gap-4 ${styles['d-flex-row']}`}>
          {cards.map((card, index) => (
            <Card className={`mb-2 ${styles.card}`} key={card.id}>
              <div className='d-flex align-items-center justify-content-between mb-2'>
                <div className={`d-flex align-items-center justify-content-center ${styles['icon-wrapper']}`}>
                  {card.icon}
                </div>
                <h3>
                  {(index + 1).toString().padStart(2, '0')}
                </h3>
              </div>
              <h4>
                {card.title}
              </h4>
              <p>
                {card.description}
              </p>
              <Button label={<RightArrowIcon />} variant="rounded-outlined" className={styles['arrow-button']} />
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;
