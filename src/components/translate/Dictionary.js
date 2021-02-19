import React from 'react';
import Iframe from 'react-iframe';

const Dictionary = ({ query }) => {
  return (
    <Iframe
      url={`https://zh.dict.naver.com/#/search?query=${encodeURI(query)}`}
      width='99%;'
      height='89%'
    ></Iframe>
  );
};

export default Dictionary;
