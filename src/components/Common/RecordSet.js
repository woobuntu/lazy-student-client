import React from 'react';
import Record from './Record';
import { Link } from 'react-router-dom';

const RecordSet = ({ device, row, key }) => {
  return (
    <Link
      className='news_link'
      key={key}
      to={{ pathname: '/article', state: row }}
    >
      <div
        className={`news_middle_${device}_record${row.userid ? '_line' : ''}`}
      >
        <Record column='date' text={row.date.slice(5)} device={device} />
        {device === 'laptop' ? (
          <Record
            column='author'
            text={row.author.slice(0, 4)}
            device={device}
          />
        ) : (
          <Record column='class' text={row.class} device={device} />
        )}
        <Record column='title' text={row.title} device={device} />
      </div>
    </Link>
  );
};

export default RecordSet;
