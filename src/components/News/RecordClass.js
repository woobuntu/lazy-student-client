import React from 'react';
import { RecordSet } from '../Common';

const RecordClass = ({ source, category }) => {
  return (
    <div className='news_middle_laptop_class'>
      <p className='news_middle_laptop_class_paragraph'>{category}</p>
      <div className='news_middle_laptop_class_overflow'>
        {source.map(row => (
          <RecordSet row={row} key={row.title} device='laptop' />
        ))}
      </div>
    </div>
  );
};

export default RecordClass;
