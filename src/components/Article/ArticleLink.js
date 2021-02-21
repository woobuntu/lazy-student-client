import React from 'react';

const ArticleLink = ({ url }) => {
  return (
    <a className='article_original' href={url}>
      뉴스 원문 링크
    </a>
  );
};

export default ArticleLink;
