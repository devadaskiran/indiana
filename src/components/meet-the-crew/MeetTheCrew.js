import React, { useState } from 'react';

import { Button, Card, Container } from 'components';
import { CREW_DATA, CREW_DATA_TITLE } from 'data/Strings';
import styles from './MeetTheCrew.module.scss';

const MeetTheCrew = () => {
  const [expanded, setExpanded] = useState(false);
  const [fixedCard, setFixedCard] = useState(null); // State to track the fixed card

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleCardClick = (id) => {
    setFixedCard(id); // Set the clicked card as fixed
  };

  const visibleCrewData = expanded ? CREW_DATA : CREW_DATA.slice(0, 4);

  return (
    <div className={`${styles.wrapper} ${expanded ? styles.expanded : ''}`}>
      <Container>
        <h2>{CREW_DATA_TITLE}</h2>
        <div className={`d-flex justify-content-center ${styles['card-wrapper']}`}>
          {visibleCrewData.map((item) => (
            <Card
              key={item.id}
              className={`${styles.card} ${fixedCard === item.id ? styles.fixed : ''}`} // Apply fixed class if the card is fixed
              style={{ backgroundImage: `url(${item.img})` }}
              onClick={() => handleCardClick(item.id)} // Handle click event for the Card
            >
              <img src={item.img} alt={`${item.name}, ${item.qualification}, ${item.designation} of Indiana Public School`}/>
              <div className={styles.texts}>
                <h4>{item.name}</h4>
                <p className={styles.qualification}>{item.qualification}</p>
                <p>{item.designation}</p>
              </div>
            </Card>
          ))}
        </div>
        <Button label={expanded ? "Hide full crew" : "Show full crew"} variant="outlined" onClick={handleExpand} className="mt-3" />
      </Container>
    </div>
  );
};

export default MeetTheCrew;
