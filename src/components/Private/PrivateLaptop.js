import React from 'react';
import OverFlow from './OverFlow';

const PrivateLaptop = ({ doneArr, yetArr }) => {
  return (
    <div className='private_middle_laptop'>
      <div className='private_middle_laptop_align'>
        <div className='private_middle_laptop_done'>
          <div className='private_middle_laptop_title'>
            <p>Done</p>
          </div>
          <OverFlow arr={doneArr} />
        </div>
        <div className='private_middle_laptop_yet'>
          <div className='private_middle_laptop_title'>
            <p>Yet</p>
          </div>
          <OverFlow arr={yetArr} />
        </div>
      </div>
    </div>
  );
};

export default PrivateLaptop;
