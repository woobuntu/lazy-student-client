import React from 'react';
import rendering from './rendering';

const renderingTranslation = props =>
  props.subject === 'naver' || props.subject === 'kakao' ? (
    rendering(props)
  ) : (
    <>
      {rendering({ ...props, subject: 'naver' })}
      {rendering({ ...props, subject: 'kakao' })}
    </>
  );

export default renderingTranslation;
