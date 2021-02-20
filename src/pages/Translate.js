import React, { useState, useRef } from 'react';
import '../css/Translate.css';
import hideVirtualKeyboard from 'hide-virtual-keyboard';
import { Spinner, LeftBox, RightBox, MiddleBox } from '../components/translate';
import { getTranslation } from '../utils/translate';
import { example } from '../utils/translate/dummy';

function Translate() {
  const [translations, setTranslations] = useState(example);
  const [load, setLoad] = useState(false);
  const [query, setQuery] = useState('我');
  const [input, setInput] = useState('');
  const [subject, setSubject] = useState('both');

  const translate = async (e, subject) => {
    e.preventDefault();
    hideVirtualKeyboard();
    setSubject(subject);
    setLoad(true);
    const translated = await getTranslation(input, subject);
    setLoad(false);
    setTranslations(translated);
  };

  return (
    <div className='App'>
      {load && <Spinner />}
      <div className='nav'>
        <p>중국어 네이버, 카카오 번역 + 병음 가져오기</p>
      </div>
      <div className='align'>
        <LeftBox
          setInput={setInput}
          setInput={setInput}
          translate={translate}
        />
        <div className='blankBox' />
        <MiddleBox
          translations={translations}
          setTranslations={setTranslations}
          subject={subject}
          setQuery={setQuery}
        />
        <div className='blankBox' />
        <RightBox query={query} />
      </div>
    </div>
  );
}

export default Translate;
