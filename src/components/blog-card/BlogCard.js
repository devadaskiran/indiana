import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Card } from 'components';
import { RightArrowIcon } from 'assets/icons';
import styles from './BlogCard.module.scss';

const BlogCard = ({ handleClick, category, title, date, author, description, image, className }) => {
  const [authorImage, authorName, authorDesignation] = author;

  return (
    <Card className={`${styles.wrapper} ${className}`}>
      <img src={image} alt='montessory' />
      <div onClick={handleClick} className={`blog-title-wrapper-global ${styles['blog-title-wrapper']}`}>
        <p className={`category-global ${styles.category}`}>
          {category}
        </p>
        <h2 className={`blog-title-global ${styles['blog-title']}`}>
          {title}
        </h2>
        <div className={`hidden-data-global ${styles['hidden-data']}`} >
          <p className={`date-global ${styles.date}`}>Published on: <time dateTime={date}>{date}</time></p>
          <div className={styles['author-wrapper']}>
            <Avatar photo={authorImage} fullName={authorName} designation={authorDesignation} />
          </div>
          <Button onClick={handleClick} label={<><span>Read</span><RightArrowIcon /></>} variant="rounded-outlined" className='arrow-button' />
        </div>
      </div>
    </Card>
  );
};

BlogCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.string])).isRequired,
  description: PropTypes.string.isRequired
};

export default BlogCard;
