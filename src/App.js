import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { Landing, AboutUs, Vision, Mission, Gallery, Contact, NotFound } from './pages';
import '../src/index.scss';

function App() {
  const [activeComponent, setActiveComponent] = useState('Landing');

  const handleHome = () => {
    setActiveComponent('Landing');
  };

  const handleAbout = () => {
    setActiveComponent('AboutUs');
  };

  const handleVision = () => {
    setActiveComponent('Vision');
  };

  const handleMission = () => {
    setActiveComponent('Mission');
  };

  const handleGallery = () => {
    setActiveComponent('Gallery');
  };

  const handleContact = () => {
    setActiveComponent('Contact');
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Landing':
        return <Landing handleHome={handleHome} handleAbout={handleAbout} handleVision={handleVision} handleMission={handleMission} handleGallery={handleGallery} handleContact={handleContact} />;
      case 'AboutUs':
        return <AboutUs handleHome={handleHome} handleAbout={handleAbout} handleVision={handleVision} handleMission={handleMission} handleGallery={handleGallery} handleContact={handleContact} />;
      case 'Vision':
        return <Vision handleHome={handleHome} handleAbout={handleAbout} handleVision={handleVision} handleMission={handleMission} handleGallery={handleGallery} handleContact={handleContact} />;
      case 'Mission':
        return <Mission handleHome={handleHome} handleAbout={handleAbout} handleVision={handleVision} handleMission={handleMission} handleGallery={handleGallery} handleContact={handleContact} />;
      case 'Gallery':
        return <Gallery handleHome={handleHome} handleAbout={handleAbout} handleVision={handleVision} handleMission={handleMission} handleGallery={handleGallery} handleContact={handleContact} />;
      case 'Contact':
        return <Contact handleHome={handleHome} handleAbout={handleAbout} handleVision={handleVision} handleMission={handleMission} handleGallery={handleGallery} handleContact={handleContact} />;
      default:
        return <NotFound handleHome={handleHome} handleAbout={handleAbout} handleVision={handleVision} handleMission={handleMission} handleGallery={handleGallery} handleContact={handleContact} />;
    }
  };

  return (
    <>
      {renderComponent()}
      {/* <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes> */}
    </>
  );
}

export default App;
