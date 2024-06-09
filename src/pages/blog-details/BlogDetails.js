import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MainLayout } from 'layout';
import { Container, Breadcrumb, Avatar } from 'components';
import styles from './BlogDetails.module.scss';

const BlogDetails = () => {
  const location = useLocation();
  const { post } = location.state || { post: {}, paths: [] };

  const paths = [
    { title: 'Home', url: '/' },
    { title: 'Blogs', url: '/blogs' },
    { title: post.title || 'Blog' }
  ];

  const paragraphs = post.description ? post.description.split('\n\n') : [];

  useEffect(() => {
    // Update the og:image meta tag dynamically
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', post.image);
    }
    const twitterImageMeta = document.querySelector('meta[name="twitter:image"]');
    if (twitterImageMeta) {
      twitterImageMeta.setAttribute('content', post.image);
    }
  }, [post.image]);

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <Helmet>
          <title>{post.title} - Blog</title>
          <meta name="description" content={post.description?.substring(0, 160) || 'Blog post description'} />
          <meta name="keywords" content={`${post.category}, Montessori, Education, Kerala`} />
          <meta name="author" content={post.author ? post.author[1] : 'Author'} />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.description?.substring(0, 160)} />
          <meta property="og:image" content={post.image} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:type" content="article" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.description?.substring(0, 160)} />
          <meta name="twitter:image" content={post.image} />

          {/* JSON-LD Script */}
          <script type="application/ld+json">
            {`
              {
                "@context": "http://schema.org",
                "@type": "EducationalOrganization",
                "name": "Indiana Public School",
                "url": "http://www.indianaschool.in",
                "logo": "http://www.indianaschool.in/static/media/school-imag3.64dc1142e2177bc05823.jpeg",
                "description": "Top School in Attingal and Best School in Attingal - Welcome to Indiana Public School, where innovation meets nature in a harmonious blend for holistic education. Our purpose-built, green campus nurtures young minds, offering spacious, multimedia-equipped classrooms flooded with natural light. Embracing inquiry-based learning from Pre KG onwards, we foster deep understanding through engaging projects and real-world activities. Our virtual learning platform ensures comprehensive education from Pre KG to all Grades.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Toll Junction, opposite KSEB 110KV substation, Avanavanchery",
                  "addressLocality": "Attingal",
                  "addressRegion": "KL",
                  "postalCode": "695103",
                  "addressCountry": "IN"
                },
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+91-9072408723",
                    "contactType": "Customer Service"
                  },
                  {
                    "@type": "ContactPoint",
                    "telephone": "+91-9744308723",
                    "contactType": "Admissions Office"
                  }
                ],
                "sameAs": [
                  "https://www.facebook.com/p/Indiana-Public-School-Attingal-100071582410902/",
                  "https://www.instagram.com/indianapublicschool/",
                  "https://in.linkedin.com/company/indiana-school"
                ],
                "openingHours": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "08:00",
                    "closes": "16:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "08:00",
                    "closes": "12:00"
                  }
                ],
                "foundingDate": "2021-06-01",
                "founders": [
                  {
                    "@type": "Person",
                    "name": "N P Sudarsanan"
                  },
                  {
                    "@type": "Person",
                    "name": "Smitha Nair"
                  }
                ]
              }
            `}
          </script>
        </Helmet>
        <Container>
          <Breadcrumb paths={paths} />
          <div className={styles.header}>
            <p className={styles.category}>{post.category}</p>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.date}>
              Published on: <time dateTime={post.date}>{post.date}</time>
            </p>
            <div className={styles.author}>
              <Avatar photo={post.author ? post.author[0] : null} fullName={post.author ? post.author[1] : 'Anonymous'} designation={post.author ? post.author[2] : 'Contributor'} />
            </div>
          </div>
          {post.image && (
            <div className={styles.imageWrapper}>
              <img src={post.image} alt={post.title} className={styles.image} />
            </div>
          )}
          <div className={styles.content}>
            {paragraphs.map((paragraph, index) => (
              <React.Fragment key={index}>
                <p>
                  {paragraph.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < paragraph.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                <br />
              </React.Fragment>
            ))}
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};

export default BlogDetails;
