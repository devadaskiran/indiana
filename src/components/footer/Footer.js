import React from 'react';
import Container from '../container';
import { CopyrightIcon, FacebookIcon, GmailIcon, InstagramIcon, PhoneIcon, WhatsAppIcon } from '@assets/icons';
import styles from './Footer.module.scss';


const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container className='d-flex justify-content-between align-items-center'>
        <div className={`d-flex flex-column align-items-center ${styles.logo}`}>
          <div className='w-100 mb-2'>
            <h2>
              Indiana <span>Public School</span>
            </h2>
            <p>
              Toll Junction, opposite KSEB 110KV substation, <br/>
              Avanavanchery, Kerala 695103
            </p>
          </div>
          <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0125036821883!2d76.84619017508857!3d8.69035989419775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05c12153e16da9%3A0x46a371ca31facb8a!2sIndiana%20Public%20School%20-%20Attingal!5e0!3m2!1sen!2sin!4v1715493313336!5m2!1sen!2sin" width="100%" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <ul className={`list-style-none ${styles['footer-links']}`}>
          <li>
            Call Us
          </li>
          <li className="d-flex align-items-center">
            <PhoneIcon />
            <a href="tel:919072408723">
              9072408723
            </a>
          </li>
          <li className="d-flex align-items-center">
            <PhoneIcon />
            <a href="tel:919744308723">
              9744308723
            </a>
          </li>
          <li className="d-flex align-items-center">
            <PhoneIcon />
            <a href="tel:918861308723">
              8861308723
            </a>
          </li>
          <li className="d-flex align-items-center">
            <PhoneIcon />
            <a href="tel:919605130788">
              9605130788
            </a>
          </li>
        </ul>
        <ul className={`list-style-none ${styles['footer-links']}`}>
          <li>
            Connect with us
          </li>
          <li className="d-flex align-items-center">
            <FacebookIcon />
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/p/Indiana-Public-School-Attingal-100071582410902/">
              Indiana Public School
            </a>
          </li>
          <li className="d-flex align-items-center">
            <InstagramIcon />
            <a rel="noreferrer" href="https://www.instagram.com/indianapublicschool/" target="_blank" >
              @indianapublicschool
            </a>
          </li>
          <li className="d-flex align-items-center">
            <WhatsAppIcon/>
            <a href="https://wa.me/+9188611308723">
              8861308723
            </a>
          </li>
          <li className="d-flex align-items-center">
            <GmailIcon/>
            <a href="mailto:indianapublicschool@gmail.com">
              indianapublicschool@gmail.com
            </a>
          </li>
        </ul>
      </Container>
      <div className={`d-flex justify-content-center align-items-center ${styles.copyrights}`}>
        <CopyrightIcon/>
        Indiana Public School, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
