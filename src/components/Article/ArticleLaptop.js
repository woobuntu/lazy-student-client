import React from 'react';
import { isAuth } from '../../utils/auth';
import ArticleLink from './ArticleLink';
import MyOpinion from './MyOpinion';
import KakaoAuth from './KakaoAuth';
import ArticleContent from './ArticleContent';
import ArticleMeta from './ArticleMeta';

const ArticleLaptop = ({ state, onSubmit, posted }) => {
  const { title, date, author, content, url, posttitle, postcontent } = state;
  const where = state.class;

  return (
    <div className='article_laptop'>
      <div className='article_laptop_left'>
        <ArticleMeta
          device='laptop'
          title={title}
          date={date}
          author={author}
          where={where}
        />
        <ArticleContent content={content} device='laptop' />
        <ArticleLink url={url} />
      </div>
      {isAuth() ? (
        <MyOpinion
          onSubmit={onSubmit}
          posttitle={posttitle}
          postcontent={postcontent}
          posted={posted}
          device='laptop'
        />
      ) : (
        <KakaoAuth />
      )}
    </div>
  );
};

export default ArticleLaptop;
