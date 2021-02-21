import React, { useState, useRef } from 'react';
import MiddleButton from './MiddleButton';
import { copy, renderingWith, copyText } from '../../utils/translate';
import { example } from '../../utils/translate/dummy';

const MiddleBox = ({ translations, setTranslations, setQuery, subject }) => {
  const [sort, setSort] = useState('asc');
  const textToCopy = useRef(null);

  const changeSort = () => (sort === 'asc' ? setSort('dsc') : setSort('asc'));

  const showDict = e => setQuery(e.target.innerText);

  const modify = (index, subject, origin) => {
    const copiedState = copy(origin);
    copiedState[index][subject].modifying = true;
    setTranslations(copiedState);
  };

  const modified = (e, subject, origin) => {
    const index = e.target.name;
    const modifiedContent = e.target.value;
    const copiedState = copy(origin);
    if (e.charCode === 13) {
      copiedState[index][subject] = { text: modifiedContent, modifying: false };
      setTranslations(copiedState);
    }
  };
  const makingProps = (element, index) => ({
    translations,
    element,
    index,
    modify,
    modified,
    sort,
    showDict,
    subject,
  });

  return (
    <div className='middleBox'>
      <div className='middleBoxTop'>
        <p>번역, 병음, 원문</p>
      </div>
      <div className='middleBoxBottom'>
        <div className='translatedContent' ref={textToCopy}>
          {translations.map((element, index) => (
            <div
              key={index}
              className={`text${translations === example ? ' example' : ''}`}
            >
              {renderingWith(makingProps(element, index))}
              <br />
            </div>
          ))}
        </div>
        <div className='buttonBox'>
          <MiddleButton text='정렬 순서 바꾸기' callback={changeSort} />
          <MiddleButton
            text='전체 복사하기'
            callback={() => copyText(textToCopy)}
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleBox;
