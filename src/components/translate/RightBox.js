import React from 'react';
import Dictionary from './Dictionary';

const RightBox = ({ query }) => {
  return (
    <div className='rightBox'>
      <div className='rightBoxTop'>
        <p>개별 단어 네이버 사전 확인하기</p>
      </div>
      <Dictionary query={query} />
    </div>
  );
};

export default RightBox;
