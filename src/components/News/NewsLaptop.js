import React from 'react';
import RecordClass from './RecordClass';

const NewsLaptop = ({ C, J, F }) => {
  return (
    <div className='news_middle_laptop'>
      <RecordClass source={C} category='분수대' />
      <RecordClass source={J} category='만물상' />
      <RecordClass source={F} category='fn스트리트' />
    </div>
  );
};

export default NewsLaptop;
