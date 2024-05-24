import React from 'react';
import { MainLayout } from 'layout';
import { Container } from 'components';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <MainLayout>
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
