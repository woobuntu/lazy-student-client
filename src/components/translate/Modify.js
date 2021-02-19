import React from 'react';

const tooltipTextAfter =
  '수정이 끝난 후에는 해당 박스 안에서 엔터를 꼭 눌러주세요. 그래야 변경된 내용으로 복사가 가능합니다!';

const Modify = ({ subject, index, defaultValue, callback, origin }) => {
  const convertedSubject =
    subject === 'pinyin'
      ? '병음'
      : subject === 'kakao'
      ? '카카오 번역'
      : '네이버 번역';
  return (
    <div tooltip={tooltipTextAfter}>
      <p>{convertedSubject} : </p>
      <textarea
        name={index}
        defaultValue={defaultValue}
        onKeyPress={e => callback(e, subject, origin)}
      ></textarea>
    </div>
  );
};

export default Modify;
