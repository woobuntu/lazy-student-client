import React from 'react';
import { Modify, Row } from '../../components/translate';

const rendering = ({
  translations,
  element,
  index,
  modify,
  modified,
  subject,
}) =>
  element[subject].modifying ? (
    <Modify
      origin={translations}
      subject={subject}
      index={index}
      defaultValue={element[subject].text}
      callback={modified}
    />
  ) : (
    <Row
      origin={translations}
      index={index}
      callback={modify}
      text={element[subject].text}
      subject={subject}
    />
  );

export default rendering;
