import React from 'react';

const Record = ({ device, column, text }) => {
  return (
    <div className={`news_middle_${device}_record_${column}`}>
      <p>{text}</p>
    </div>
  );
};

export default Record;
