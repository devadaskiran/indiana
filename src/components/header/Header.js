import React, { useState, useEffect } from 'react';

import logo from 'assets/images/logo.png';
import { Button, Container } from 'components';
import styles from './Header.module.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 200;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.wrapper} ${isScrolled ? styles.fixed : ''}`}>
      <div className={styles['second-header']}>
        <Container className="d-flex justify-content-between align-items-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <Button className="ml-1" label="Learn more" size="sm" variant="rounded" color="error" />
        </Container>
      </div>
      <header>
        <Container className='d-flex justify-content-between align-items-center'>
          <div className={`d-flex align-items-center ${styles['logo-wrapper']}`}>
            <img src={logo} alt='Logo of Indiana Public School, Attingal' />
            <h2 className='ml-1'>
              Indiana Public School
            </h2>
          </div>
          <div className='d-flex align-items-center'>
            <ul className='d-flex list-style-none gap-2'>
              <li>
                Home
              </li>
              <li>
                About Us
              </li>
              <li>
                Vision
              </li>
              <li>
                Mission
              </li>
              <li>
                Contact Us
              </li>
            </ul>
            <Button className="ml-2" label="Apply for Admission" color="primary" />
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Header;
