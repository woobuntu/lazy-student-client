import React from 'react';

const Choose = ({ subject, callback }) => {
  const text =
    subject === 'both' ? '둘 다' : subject === 'naver' ? '파파고' : '카카오';
  return (
    <button
      className={`leftButton ${subject}`}
      onClick={e => callback(e, subject)}
    >
      {text}
    </button>
  );
};

export default Choose;
