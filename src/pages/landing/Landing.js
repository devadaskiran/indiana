import React from 'react';
import { MainLayout } from 'layout';
import { About, Banner, EduMsg, IndKids, MeetTheCrew, Testimonials } from 'components';

const Landing = () => {
  return (
    <MainLayout>
      <Banner/>
      <About/>
      <EduMsg/>
      <IndKids/>
      <MeetTheCrew/>
      <Testimonials/>
    </MainLayout>
  );
};

export default Landing;
