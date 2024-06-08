import React from 'react';
import { MainLayout } from 'layout';
import { Container } from 'components';
import schoolImg from 'assets/images/top-school-in-attingal.jpg';
import { Breadcrumb } from 'components';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import styles from './SingularAttingal.module.scss';

const SingularAttingal = () => {
  const location = useLocation();
  const paths = [
    { title: 'Home', url: '/' },
    { title: 'Top School in Attingal' }
  ];
  return (
    <MainLayout>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Welcome to Indiana Public School, the Best and Top School in Attingal, where innovation meets nature in a harmonious blend for holistic education." />
        <meta property="og:title" content="Welcome to Indiana Public School - Best and Top School in Attingal" />
        <meta property="og:description" content="Welcome to Indiana Public School, the Best and Top School in Attingal, where innovation meets nature in a harmonious blend for holistic education." />
        <meta property="og:image" content="http://www.indianaschool.in/static/media/school-imag3.64dc1142e2177bc05823.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={location} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome to Indiana Public School - Best and Top School in Attingal" />
        <meta name="twitter:description" content="Welcome to Indiana Public School, the Best and Top School in Attingal, where innovation meets nature in a harmonious blend for holistic education." />
        <meta name="twitter:image" content="https://www.indianaschool.in/static/media/IMG-20230915-WA0251.9f1e7528668f964ee2b0.jpeg" />
        <meta name="keywords" content="Indiana Public School, Attingal, best school, top school, holistic education, innovation, nature, excellence" />
        <title>Welcome to Indiana Public School - Best and Top School in Attingal</title>
      </Helmet>
      <div className={styles.wrapper}>
        <Container>
          <Breadcrumb paths={paths} />
          <header>
            <h1>Indiana Public School: Top English School - Nurturing Minds, Shaping Futures in Attingal</h1>
            <p>Published on: <time datetime="2024-05-30">May 30, 2024</time></p>
            <img src={schoolImg} alt='Indiana Public School - Top School in Attingal: Nurturing Minds, Shaping Futures' />
          </header>
          <main>
            <article>
              <p>In the heart of Attingal stands a beacon of educational excellence – Indiana Public School. Renowned as the best and top English school in Attingal, Indiana Public School isn't just a place of learning; it's a community hub where young minds are nurtured, challenged, and empowered to reach their full potential.
              </p>
              <p>At Indiana Public School, education isn't merely about imparting knowledge; it's about fostering holistic growth. We understand that in the 21st century, education needs to evolve continuously to meet the challenges of a rapidly changing world. That's why we take pride in offering a unique and inclusive educational environment that caters to the diverse needs of our local community.</p>
              <p>Our philosophy revolves around the idea that education is a collaborative effort between the school and the home. We believe that by working together, we can provide the best possible support for our students, helping them thrive academically and morally. With a dedicated team of educators and staff, we are committed to guiding our students towards becoming informed and responsible citizens who can make a positive impact on society.</p>
              <p>
                One of the hallmarks of Indiana Public School is our commitment to valuing each student as an individual with their own unique personality and potential. We understand that every child learns differently, which is why we strive to create a stress-free learning environment that encourages creativity and critical thinking.
              </p>
              <p>
                At Indiana Public School, we blend traditional teaching methods with modern practices to provide our students with a well-rounded education. Our curriculum emphasizes not only academic excellence but also the development of essential life skills, ethical values, and moral principles.
              </p>
              <p>
                As Aristotle famously said, "Educating the mind without educating the heart is not education." This philosophy resonates deeply with us, and we ensure that our students not only excel academically but also grow into compassionate and empathetic individuals.
              </p>
              <p>
                In our pursuit of excellence, we are always open to new ideas and suggestions that can enhance the educational experience of our students. We believe that collaboration is the key to success, and we actively encourage our learners to engage with each other, fostering a culture of teamwork and innovation.
              </p>
              <p>
                As we look towards the future, we are confident that Indiana Public School will continue to set high standards in the field of education in Attingal and beyond. With the support of our dedicated team, committed parents, and enthusiastic students, we are poised to achieve even greater heights of success.
              </p>
              <p>
                In conclusion, Indiana Public School stands as a shining example of educational excellence in Attingal. As the best and top English school in the region, we are proud to nurture the minds of tomorrow and shape the future leaders of our community.
              </p>
            </article>
          </main>
        </Container>
      </div>
    </MainLayout>
  );
};

export default SingularAttingal;
