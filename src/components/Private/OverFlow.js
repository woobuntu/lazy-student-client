import React from 'react';
import { RecordSet } from '../Common';

const OverFlow = ({ arr }) => {
  return (
    <div className='overflow'>
      {arr.map(row => (
        <RecordSet row={row} key={row.title} device='laptop' />
      ))}
    </div>
  );
};

export default OverFlow;
