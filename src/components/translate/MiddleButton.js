import React from 'react';

const MiddleButton = ({ text, callback }) => {
  return (
    <button className='rightButton' onClick={callback}>
      {text}
    </button>
  );
};

export default MiddleButton;
