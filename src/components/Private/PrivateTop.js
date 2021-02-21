import React from 'react';
import { Link } from 'react-router-dom';

const PrivateTop = () => {
  return (
    <div className='private_top'>
      <div className='blank'></div>
      <h1>Lazy-News</h1>
      <div className='blank'>
        <Link className='toHome' to='/news'>
          <i class='fas fa-home'></i>
        </Link>
      </div>
    </div>
  );
};

export default PrivateTop;
