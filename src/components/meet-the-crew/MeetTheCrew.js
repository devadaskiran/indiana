import React, { useState } from 'react';

import { Button, Card, Container } from 'components';
import { CREW_DATA, CREW_DATA_TITLE } from 'data/Strings';
import styles from './MeetTheCrew.module.scss';

const MeetTheCrew = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const visibleCrewData = expanded ? CREW_DATA : CREW_DATA.slice(0, 3);

  return (
    <div className={`${styles.wrapper} ${expanded ? styles.expanded : ''}`}>
      <Container>
        <h2>{CREW_DATA_TITLE}</h2>
        <div className={`d-flex justify-content-center ${styles['card-wrapper']}`}>
          {visibleCrewData.map((item) => (
            <Card key={item.id} className={styles.card} style={{ backgroundImage: `url(${item.img})` }}>
              <div className={styles.texts}>
                <h4>
                  {item.name}
                </h4>
                <p>
                  {item.designation}
                </p>
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
