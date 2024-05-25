import React from 'react';
import { MainLayout } from 'layout';

const NotFound = ({handleHome, handleAbout, handleVision, handleMission, handleGallery, handleContact}) => {
  return (
    <MainLayout handleHome={handleHome} handleAbout={handleAbout} handleVision={handleVision} handleMission={handleMission} handleGallery={handleGallery} handleContact={handleContact} >
      404 Page not found!
    </MainLayout>
  );
};

export default NotFound;
