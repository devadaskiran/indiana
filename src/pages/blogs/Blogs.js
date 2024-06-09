import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from 'layout';
import { BlogCard, Breadcrumb, Container } from 'components';
import { BLOG_POSTS } from 'data/BlogData';
import styles from './Blogs.module.scss';

const Blogs = () => {
  const navigate = useNavigate();

  const paths = [
    { title: 'Home', url: '/' },
    { title: 'Blogs' }
  ];

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/ /g, '-');
  };

  const handleCardClick = (post) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/blogs/${generateSlug(post.title)}`, { state: { post, paths: [...paths, { title: post.title }] } });
  };
  const latestPost = BLOG_POSTS[BLOG_POSTS.length - 1];
  const popularBlogs = BLOG_POSTS.slice(1).sort((a, b) => b.popularity - a.popularity).slice(0, 5);
  const remainingBlogs = BLOG_POSTS
  .filter((post, index) => index !== BLOG_POSTS.length - 1) 
  .reverse(); 


  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <Container>
          <Breadcrumb paths={paths} />
          <h1>Blogs</h1>
          <div className={styles['blog-wrapper']}>
            <div className='d-flex gap-2'>
              <div className={styles['latest-blog']}>
                <h2 className={styles['sub-title']}>Latest Blog</h2>
                {latestPost && (
                  <BlogCard
                    className={`mb-2 ${styles['latest-blog-item']}`}
                    category={latestPost.category}
                    title={latestPost.title}
                    date={latestPost.date}
                    author={latestPost.author}
                    description={latestPost.description}
                    image={latestPost.image}
                    handleClick={() => handleCardClick(latestPost)}
                  />
                )}
              </div>
              <div className={styles['popular-blogs']}>
                <h2 className={styles['sub-title']}>Popular Blogs</h2>
                {popularBlogs.map((post, index) => (
                  <BlogCard
                    key={index}
                    className={styles['popular-blog-item']}
                    category={post.category}
                    title={post.title}
                    date={post.date}
                    author={post.author}
                    description={post.description}
                    image={post.image}
                    handleClick={() => handleCardClick(post)}
                  />
                ))}
              </div>
            </div>
            <br />
          </div>
          <div className={styles['blog-wrapper']}>
            <div className={styles['remaining-blogs']}>
              {remainingBlogs.map((post, index) => (
                <div className={styles['blogs-item']} key={index}>
                  <BlogCard
                    className={styles['remaining-blog-item']}
                    category={post.category}
                    title={post.title}
                    date={post.date}
                    author={post.author}
                    description={post.description}
                    image={post.image}
                    handleClick={() => handleCardClick(post)}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Blogs;
