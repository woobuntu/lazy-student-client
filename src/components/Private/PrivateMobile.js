import React from 'react';
import { RecordSet } from '../Common';

const PrivateMobile = ({ arr }) => {
  return (
    <div className='private_middle_mobile'>
      {arr.map(element => (
        <RecordSet row={element} key={element.title} device='mobile' />
      ))}
      <div className='private_middle_laptop'></div>
    </div>
  );
};

export default PrivateMobile;
