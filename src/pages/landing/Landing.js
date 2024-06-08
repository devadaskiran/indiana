import React from 'react';
import { Helmet } from 'react-helmet';
import { MainLayout } from 'layout';
import { useLocation } from 'react-router-dom';
import { About, Banner, EduMsg, IndKids, MeetTheCrew, Testimonials } from 'components';

const Landing = ({handleHome, handleAbout, handleVision, handleMission, handleGallery, handleContact}) => {
  const location = useLocation();
  return (
    <MainLayout handleHome={handleHome} handleAbout={handleAbout} handleVision={handleVision} handleMission={handleMission} handleGallery={handleGallery} handleContact={handleContact} >
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Best English School in Attingal - Welcome to Indiana Public School, the Best and Top School in Attingal, where innovation meets nature in a harmonious blend for holistic education." />
        <meta property="og:title" content="Best English School in Attingal - Welcome to Indiana Public School - Best and Top School in Attingal" />
        <meta property="og:description" content="Best English School in Attingal - Welcome to Indiana Public School, the Best and Top School in Attingal, where innovation meets nature in a harmonious blend for holistic education." />
        <meta property="og:image" content="http://www.indianaschool.in/static/media/school-imag3.64dc1142e2177bc05823.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best English School in Attingal - Welcome to Indiana Public School - Best and Top School in Attingal" />
        <meta name="twitter:description" content="Best English School in Attingal - Welcome to Indiana Public School, the Best and Top School in Attingal, where innovation meets nature in a harmonious blend for holistic education." />
        <meta name="twitter:image" content="https://www.indianaschool.in/static/media/IMG-20230915-WA0251.9f1e7528668f964ee2b0.jpeg" />
        <meta name="keywords" content="Indiana Public School, Attingal, best school, top school, holistic education, innovation, nature, excellence" />
        <title>Best English School in Attingal - Welcome to Indiana Public School</title>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "EducationalOrganization",
            "name": "Indiana Public School",
            "url": "http://www.indianaschool.in",
            "logo": "http://www.indianaschool.in/static/media/school-imag3.64dc1142e2177bc05823.jpeg",
            "description": "Best English School in Attingal - Welcome to Indiana Public School, the Best and Top School in Attingal, where innovation meets nature in a harmonious blend for holistic education.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Toll Junction, opposite KSEB 110KV substation, Avanavanchery",
              "addressLocality": "Attingal",
              "addressRegion": "KL",
              "postalCode": "695103",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9072408723",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://www.facebook.com/p/Indiana-Public-School-Attingal-100071582410902/",
              "https://www.instagram.com/indianapublicschool/",
              "https://in.linkedin.com/company/indiana-school"
            ]
          })}
        </script>
      </Helmet>
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
