import React from 'react';
import { placeholder } from '../../utils/translate/dummy';
import Choose from './Choose';

const LeftBox = ({ setInput, translate }) => {
  return (
    <div className='leftBox'>
      <div className='leftBoxTop'>
        <p>중국어 원문</p>
      </div>
      <div className='form'>
        <textarea
          placeholder={placeholder}
          onChange={e => setInput(e.target.value)}
        />
        <div className='choose'>
          {['naver', 'kakao', 'both'].map(subject => (
            <Choose key={subject} subject={subject} callback={translate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftBox;
