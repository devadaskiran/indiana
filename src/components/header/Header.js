import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Container, AdmissionModal } from 'components';
import { CloseIcon, MenuIcon } from 'assets/icons';
import styles from './Header.module.scss';

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenu]);

  const toggleMobileMenu = () => {
    setMobileMenu(prevMenu => !prevMenu);
  };

  const toggleModal = () => {
    setShowModal(prevModal => !prevModal);
  };
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className={`${styles.wrapper} ${isScrolled ? styles.fixed : ''}`}>
        <div className={styles['second-header']}>
          <Container className="d-flex justify-content-between align-items-center">
            <p>
              Admissions are open for the 2024-25 academic year. Secure your seat today!
            </p>
            <Button className="ml-1" label="Learn more" size="sm" variant="rounded" color="error" />
          </Container>
        </div>
        <header>
          <Container className='d-flex justify-content-between align-items-center'>
            <Link to="/" className={`d-flex align-items-center ${styles['logo-wrapper']}`}>
              <Image src="/images/logo.png" alt='Logo of Indiana Public School, Attingal'/>
              <h2 className='ml-1'>
                Indiana <span>Public School</span>
              </h2>
            </Link>
            <div className='d-flex align-items-center'>
              <ul className={`d-flex list-style-none gap-2 ${mobileMenu ? styles['mobile-menu'] : ''}`}>
                <li onClick={handleClick}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={handleClick}>
                  <Link to="/about">About Us</Link>
                </li>
                <li onClick={handleClick}>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li onClick={handleClick}>
                  <Link to="/vision-mission">Vision & Mission</Link>
                </li>
                <li onClick={handleClick}>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li onClick={handleClick}>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
              <Button
                onClick={toggleModal}
                className="ml-2"
                label={<><span>Apply for</span> Admission</>}
                color="primary"
              />
              <div className={`${styles['menu-icon']} ${mobileMenu ? styles['close-icon-active'] : ''}`} onClick={toggleMobileMenu}>
                {mobileMenu ? <CloseIcon /> : <MenuIcon />}
              </div>
            </div>
          </Container>
        </header>
      </div>
      {showModal && (
        <AdmissionModal onClose={toggleModal} />
      )}
    </>
  );
};

export default Header;
