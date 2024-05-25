import React from 'react';
import { MainLayout } from 'layout';
import { Container } from 'components';
import { FacebookIcon, GmailIcon, InstagramIcon, PhoneIcon, WhatsAppIcon } from 'assets/icons';
import styles from './Contact.module.scss';


const Contact = ({handleHome, handleAbout, handleVision, handleMission, handleGallery, handleContact}) => {
  return (
    <MainLayout handleHome={handleHome} handleAbout={handleAbout} handleVision={handleVision} handleMission={handleMission} handleGallery={handleGallery} handleContact={handleContact} >
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <h1>
            Contact Us
          </h1>
        </div>
        <Container className="d-flex justify-content-between">
          <div className={styles.form}>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0125036821883!2d76.84619017508857!3d8.69035989419775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05c12153e16da9%3A0x46a371ca31facb8a!2sIndiana%20Public%20School%20-%20Attingal!5e0!3m2!1sen!2sin!4v1715493313336!5m2!1sen!2sin" width="90%" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className={styles.contacts}>
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
                <a href="tel:919072408723">
                  Indiana Public School
                </a>
              </li>
              <li className="d-flex align-items-center">
                <InstagramIcon />
                <a href="tel:919072408723">
                  @indianapublicschool
                </a>
              </li>
              <li className="d-flex align-items-center">
                <WhatsAppIcon />
                <a href="https://wa.me/+9188611308723">
                  88611308723
                </a>
              </li>
              <li className="d-flex align-items-center">
                <GmailIcon />
                <a href="https://wa.me/+9188611308723">
                  indianapublicschool@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Contact;
