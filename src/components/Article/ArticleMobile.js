import React from 'react';
import MyOpinion from './MyOpinion';
import ArticleLink from './ArticleLink';
import ArticleContent from './ArticleContent';
import ArticleMeta from './ArticleMeta';
import { isAuth } from '../../utils/auth';

const ArticleMobile = ({ state, posted, onSubmit }) => {
  const { title, date, author, content, url, posttitle, postcontent } = state;
  const where = state.class;
  return (
    <div className='article_mobile'>
      <ArticleMeta
        device='mobile'
        title={title}
        date={date}
        author={author}
        where={where}
      />
      <ArticleContent content={content} device='mobile' />
      <ArticleLink url={url} />
      {isAuth() && (
        <MyOpinion
          onSubmit={onSubmit}
          posttitle={posttitle}
          postcontent={postcontent}
          posted={posted}
          device='mobile'
        />
      )}
    </div>
  );
};

export default ArticleMobile;
