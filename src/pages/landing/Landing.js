import React from 'react';
import { MainLayout } from 'layout';
import { About, Banner, EduMsg, IndKids, MeetTheCrew, Testimonials } from 'components';

const Landing = ({handleHome, handleAbout, handleVision, handleMission, handleGallery, handleContact}) => {
  return (
    <MainLayout handleHome={handleHome} handleAbout={handleAbout} handleVision={handleVision} handleMission={handleMission} handleGallery={handleGallery} handleContact={handleContact} >
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
