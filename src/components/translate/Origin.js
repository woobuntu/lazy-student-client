import React from 'react';

const tooltipOrigin =
  '단어를 클릭하시면 오른쪽 화면에서 네이버 사전 검색 결과를 확인할 수 있습니다.';

const Origin = ({ origin, callback }) => {
  return (
    <div tooltip={tooltipOrigin}>
      원문 :
      {origin.map((snippet, index) => (
        <span key={index} onClick={callback}>
          {snippet}
        </span>
      ))}
    </div>
  );
};

export default Origin;
