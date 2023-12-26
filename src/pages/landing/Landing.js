import React from 'react';
import { MainLayout } from 'layout';
import { About, Banner, EduMsg, MeetTheCrew, Testimonials } from 'components';

const Landing = () => {
  return (
    <MainLayout>
      <Banner/>
      <About/>
      <EduMsg/>
      <MeetTheCrew/>
      <Testimonials/>
    </MainLayout>
  );
};

export default Landing;
