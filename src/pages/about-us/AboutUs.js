import React from 'react';
import { MainLayout } from 'layout';
import { Container } from 'components';
import styles from './AboutUs.module.scss';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const AboutUs = () => {
  const location = useLocation();
  return (
    <MainLayout>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Welcome to Indiana Public School, where innovation meets nature in a harmonious blend for holistic education. Our purpose-built, green campus nurtures young minds, offering spacious, multimedia-equipped classrooms flooded with natural light. Embracing inquiry-based learning from Pre KG onwards, we foster deep understanding through engaging projects and real-world activities. Our virtual learning platform ensures comprehensive education from Pre KG to all Grades. At Indiana, we're not just a school; we're a family, ensuring each child feels valued and supported. Join us in shaping confident, responsible, and globally-minded individuals, where every achievement is celebrated, and every student is an esteemed INDIANIAN. Best School in Attingal. Top School In Attingal. Best English School in Attingal." />
        <meta property="og:title" content="Welcome to Indiana Public School" />
        <meta property="og:description" content="Welcome to Indiana Public School, where innovation meets nature in a harmonious blend for holistic education. Our purpose-built, green campus nurtures young minds, offering spacious, multimedia-equipped classrooms flooded with natural light. Embracing inquiry-based learning from Pre KG onwards, we foster deep understanding through engaging projects and real-world activities. Our virtual learning platform ensures comprehensive education from Pre KG to all Grades. At Indiana, we're not just a school; we're a family, ensuring each child feels valued and supported. Join us in shaping confident, responsible, and globally-minded individuals, where every achievement is celebrated, and every student is an esteemed INDIANIAN. Best School in Attingal. Top School In Attingal. Best English School in Attingal." />
        <meta property="og:image" content="http://www.indianaschool.in/static/media/school-imag3.64dc1142e2177bc05823.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={location} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome to Indiana Public School" />
        <meta name="twitter:description" content="Welcome to Indiana Public School, where innovation meets nature in a harmonious blend for holistic education. Our purpose-built, green campus nurtures young minds, offering spacious, multimedia-equipped classrooms flooded with natural light. Embracing inquiry-based learning from Pre KG onwards, we foster deep understanding through engaging projects and real-world activities. Our virtual learning platform ensures comprehensive education from Pre KG to all Grades. At Indiana, we're not just a school; we're a family, ensuring each child feels valued and supported. Join us in shaping confident, responsible, and globally-minded individuals, where every achievement is celebrated, and every student is an esteemed INDIANIAN. Best School in Attingal. Top School In Attingal. Best English School in Attingal." />
        <meta name="twitter:image" content="https://www.indianaschool.in/static/media/IMG-20230824-WA0099.869627f11ac889380eb1.jpeg" />
        <meta name="keywords" content="Indiana Public School, Attingal, holistic education, inquiry-based learning, virtual learning platform, eco-friendly campus, multimedia-assisted classrooms, personality development, child-guided learning, teacher-guided learning, VLE, inquiry-based learning framework, family-friendly environment, unique INDIANIAN, confident students, responsible students, mentally strong students, best school in Attingal, best English school, top school in Attingal" />
        <title>Welcome to Indiana Public School - About Us </title>
      </Helmet>
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <h1>About</h1>
        </div>
        <Container>
          <p>
            <strong>INDIANA PUBLIC SCHOOL...</strong> Our state of art, purpose-designed building has been thoughtfully created in a complete green environment keeping the young in mind, providing an environment that truly supports each child's learning and overall personality development.
          </p>
          <p>
            Our facility offers a different dimension of teaching, learning opportunities in well-planned, multimedia-assisted spacious classrooms. Our campus is more embraced with an Eco-friendly green nature version. All our classrooms are filled with natural light and well-ventilated. Our outdoor playground is designed to allow children to enjoy their buddy childhood to engage in play in a natural green-friendly environment.
          </p>
          <p>
            A complete student-oriented, personality-developing, and inquiry-based learning approach to challenge our students to construct a deeper meaning and understanding of the concepts. Skills and strategies are learned through systematic instructions and applied in engaging project work, investigations, and real-time activities with a mix of child-guided and teacher-guided learning. To support this approach, we have a framework of inquiry-based learning from Pre KG itself.
          </p>
          <p>
            Our School provides a virtual learning experience (VLE) which covers a full educational provision for all ages from Pre KG to all Grades. We are more than committed; when you visit our school, you will experience that family-friendly environment which we pride ourselves to say "Small enough to care but big enough to inspire."
          </p>
          <p>
            We assure, your child will be recognized as a unique INDIANIAN who will be a real icon, can be happy, safe, confident, responsible, and mentally strong enough to explore the world who will treat everyone as equal and all achievements are celebrated together.
          </p>
        </Container>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
