import React, { useState, useEffect } from 'react';
import '../css/Private.css';
import { getCookie } from '../utils/auth';
import config from '../config';
import axios from 'axios';
import {
  PrivateMobile,
  PrivateLaptop,
  PrivateSearch,
  PrivateTop,
} from '../components/Private';

function Private() {
  const [mobile, setMobile] = useState([]);
  const [good, setGood] = useState([]);
  const [goodResult, setGoodResult] = useState([]);
  const [bad, setBad] = useState([]);
  const [badResult, setBadResult] = useState([]);
  const [query, setQuery] = useState(false);

  const getNewsList = async () => {
    const token = getCookie('token');
    try {
      const {
        data: { data },
      } = await axios({
        method: 'get',
        url: `${config.REACT_APP_API}/news/logined`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMobile(filter(({ userid }) => userid, data));
      setGood(filter(({ userid }) => userid, data));
      setBad(filter(({ userid }) => userid, data));
    } catch (apiError) {
      alert(apiError);
    }
  };

  useEffect(() => {
    getNewsList();
  }, []);

  const liveSearch = e => {
    if (e.target.value) {
      setQuery(true);
      const goodResult = good.filter(element => {
        let count = 0;
        element.content.forEach(item => {
          if (item.includes(e.target.value)) {
            count = 1;
          }
        });
        if (
          element.title.includes(e.target.value) ||
          element.class.includes(e.target.value) ||
          element.author.includes(e.target.value) ||
          element.date.includes(e.target.value) ||
          element.posttitle.includes(e.target.value) ||
          element.postcontent.includes(e.target.value) ||
          count === 1
        ) {
          return element;
        }
      });
      const badResult = bad.filter(element => {
        if (
          element.title.includes(e.target.value) ||
          element.class.includes(e.target.value) ||
          element.author.includes(e.target.value) ||
          element.date.includes(e.target.value)
        ) {
          return element;
        }
      });
      setGoodResult(goodResult);
      setBadResult(badResult);
    } else {
      setQuery(false);
      getNewsList();
    }
  };

  return (
    <div className='private_body'>
      <PrivateTop />
      <PrivateSearch liveSearch={liveSearch} />
      <PrivateLaptop
        doneArr={query ? goodResult : good}
        yetArr={query ? badResult : bad}
      />
      <PrivateMobile arr={query ? goodResult : mobile} />
    </div>
  );
}

export default Private;
