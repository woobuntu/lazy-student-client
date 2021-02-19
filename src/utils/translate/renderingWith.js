import React from 'react';
import renderingTranslation from './renderingTranslation';
import rendering from './rendering';
import { Origin } from '../../components/translate';

const renderingWith = props => {
  return props.sort === 'asc' ? (
    <>
      <Origin origin={props.element.origin} callback={props.showDict} />
      {rendering({
        ...props,
        subject: 'pinyin',
      })}
      {renderingTranslation(props)}
    </>
  ) : (
    <>
      {renderingTranslation(props)}
      {rendering({
        ...props,
        subject: 'pinyin',
      })}
      <Origin origin={props.element.origin} callback={props.showDict} />
    </>
  );
};

export default renderingWith;
