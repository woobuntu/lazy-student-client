import React from 'react';
import { Link } from 'react-router-dom';

const NewsTop = ({ isAuth }) => {
  return (
    <div className='news_top'>
      <div className='blank'></div>
      <h1>Lazy-News</h1>
      <div className='blank'>
        {isAuth() && (
          <Link className='mypage' to='/mypage'>
            <i class='far fa-user'></i>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NewsTop;
