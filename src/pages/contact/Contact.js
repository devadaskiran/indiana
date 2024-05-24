import React from 'react';
import { MainLayout } from 'layout';
import { Container } from 'components';
import { FacebookIcon, GmailIcon, InstagramIcon, PhoneIcon, WhatsAppIcon } from 'assets/icons';
import styles from './Contact.module.scss';


const Contact = () => {
  return (
    <MainLayout>
      {/* <div className={styles.wrapper}>
        <div className={styles.banner}>
          <h1>
            Contact Us
          </h1>
        </div>
        <Container className="d-flex justify-content-between">
          <div className={styles.form}>
            Form will be here
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
      </div> */}
    </MainLayout>
  );
};

export default Contact;
