import React from 'react';

const tooltipText =
  '클릭할 시 텍스트를 수정할 수 있습니다. 수정이 끝난 뒤에는 해당 박스 안에서 엔터를 꼭 눌러주세요. 그래야 복사가 가능합니다!';

const Row = ({ origin, index, callback, subject, text }) => {
  const convertedSubject =
    subject === 'pinyin'
      ? '병음'
      : subject === 'naver'
      ? '네이버 번역'
      : '카카오 번역';
  return (
    <p
      name={index}
      tooltip={tooltipText}
      onClick={() => callback(index, subject, origin)}
    >
      {convertedSubject} : {text}
    </p>
  );
};

export default Row;
