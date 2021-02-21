import React from 'react';

const ArticleMeta = ({ device, title, date, author, where }) => {
  return (
    <>
      <div className={`article_${device === 'laptop' && 'laptop_left_'}title`}>
        <p>{title}</p>
      </div>
      <div className={`article_${device === 'laptop' && 'laptop_left_'}top`}>
        <div>{device === 'laptop' ? date : date.slice(5)}</div>
        <div className='article_top_class'>{where}</div>
        <div>{device === 'laptop' ? author : author.slice(0, 4)}</div>
      </div>
    </>
  );
};

export default ArticleMeta;
