import React from 'react';
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
    { title: post.title }
  ];

  const paragraphs = post.description ? post.description.split('\n\n') : [];

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <Helmet>
          <title>{post.title} - Blog</title>
          <meta name="description" content={post.description.substring(0, 160)} />
          <meta name="keywords" content={`${post.category}, Montessori, Education, Kerala`} />
          <meta name="author" content={post.author[1]} />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.description.substring(0, 160)} />
          <meta property="og:image" content={post.image} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:type" content="article" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.description.substring(0, 160)} />
          <meta name="twitter:image" content={post.image} />
        </Helmet>
        <Container>
          <Breadcrumb paths={paths} />
          <div className={styles.header}>
            <p className={styles.category}>{post.category}</p>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.date}>Published on: <time dateTime={post.date}>{post.date}</time></p>
            <div className={styles.author}>
              <Avatar photo={post.author[0]} fullName={post.author[1]} designation={post.author[2]} />
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
