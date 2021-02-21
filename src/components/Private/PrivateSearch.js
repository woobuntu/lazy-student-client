import React from 'react';

const PrivateSearch = ({ liveSearch }) => {
  return (
    <div className='private_middle_search'>
      <input type='text' onChange={liveSearch}></input>
    </div>
  );
};

export default PrivateSearch;
