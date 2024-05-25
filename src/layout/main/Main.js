import React from 'react';
import { Footer, Header } from '../../components';

const Main = ({children, handleHome, handleAbout, handleVision, handleMission, handleGallery, handleContact}) => {
  return (
    <div>
      <Header handleHome={handleHome} handleAbout={handleAbout} handleVision={handleVision} handleMission={handleMission} handleGallery={handleGallery} handleContact={handleContact} />
      {children}
      <Footer/>
    </div>
  );
};

export default Main;
