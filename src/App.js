import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Landing, AboutUs, Vision, Mission, Gallery, Contact, NotFound } from './pages';
import '../src/index.scss';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
    
    </>
  );
}

export default App;
