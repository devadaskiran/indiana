import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { Landing, AboutUs, Vision, Mission, Gallery, Contact, NotFound } from './pages';
import '../src/index.scss';

function App() {

  const [activeComponent, setActiveComponent] = useState('Landing');

  useEffect(() => {
    const capitalize = (str) => {
      return str.replace(/\b\w/g, (char) => char.toUpperCase());
    };
    let title = activeComponent === 'Landing' ? 'Homepage' : capitalize(activeComponent.replace(/([a-z])([A-Z])/g, '$1 $2'));
    document.title = `Indiana Public School - ${title}`;
  }, [activeComponent]);

  const handleHome = () => {
    setActiveComponent('Landing');
    window.scrollTo(0, 0);
  };

  const handleAbout = () => {
    setActiveComponent('AboutUs');
    window.scrollTo(0, 0);
  };

  const handleVision = () => {
    setActiveComponent('Vision');
    window.scrollTo(0, 0);
  };

  const handleMission = () => {
    setActiveComponent('Mission');
    window.scrollTo(0, 0);
  };

  const handleGallery = () => {
    setActiveComponent('Gallery');
    window.scrollTo(0, 0);
  };

  const handleContact = () => {
    setActiveComponent('Contact');
    window.scrollTo(0, 0);
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
