import React from 'react';
import { RecordSet } from '../Common';

const NewsMobile = ({ total }) => {
  return (
    <div className='news_middle_mobile'>
      {total.map(row => (
        <RecordSet row={row} key={row.title} device='mobile' />
      ))}
    </div>
  );
};

export default NewsMobile;
