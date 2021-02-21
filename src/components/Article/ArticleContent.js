import React from 'react';

const ArticleContent = ({ content, device }) => {
  return (
    <div className={`article_${device === 'laptop' && 'laptop_left_'}content`}>
      {content.map((row, index) => (
        <div key={index} className='article_content_individual'>
          {`&nbsp;${device === 'laptop' && '&nbsp;'}${row}`}
        </div>
      ))}
    </div>
  );
};

export default ArticleContent;
