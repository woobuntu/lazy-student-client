import React, { useState, useEffect } from 'react';
import '../css/Private.css';
import { Link } from 'react-router-dom';
import { getCookie } from '../utils/auth';
import config from '../config';
import axios from 'axios';

function Private() {
  const [mobile, setMobile] = useState([]);
  const [good, setGood] = useState([]);
  const [goodResult, setGoodResult] = useState([]);
  const [bad, setBad] = useState([]);
  const [badResult, setBadResult] = useState([]);
  const [query, setQuery] = useState(false);

  const getNewsList = async () => {
    const token = getCookie('token');
    let lists;
    try {
      lists = await axios({
        method: 'get',
        url: `${config.REACT_APP_API}/news/logined`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (apiError) {
      alert(apiError);
    }
    const articles = lists.data.data;
    console.log(articles);
    const done = articles.filter(element => {
      if (element.userid) return element;
    });
    const yet = articles.filter(element => {
      if (!element.userid) return element;
    });
    setMobile(done);
    setGood(done);
    setBad(yet);
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
      <div className='private_top'>
        <div className='blank'></div>
        <h1>Lazy-News</h1>
        <div className='blank'>
          <Link className='toHome' to='/news'>
            <i class='fas fa-home'></i>
          </Link>
        </div>
      </div>
      <div className='private_middle_search'>
        <input type='text' onChange={liveSearch}></input>
      </div>
      <div className='private_middle_laptop'>
        <div className='private_middle_laptop_align'>
          <div className='private_middle_laptop_done'>
            <div className='private_middle_laptop_title'>
              <p>Done</p>
            </div>
            <div className='overflow'>
              {!query &&
                good.map((element, index) => (
                  <Link
                    key={index}
                    className='news_link'
                    to={{ pathname: '/article', state: element }}
                  >
                    <div className='news_middle_laptop_record'>
                      <div className='news_middle_laptop_record_date'>
                        <p>{element.date.slice(5)}</p>
                      </div>
                      <div className='news_middle_laptop_record_author'>
                        <p>{element.author.slice(0, 4)}</p>
                      </div>
                      <div className='news_middle_laptop_record_title'>
                        <p>{element.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              {query &&
                goodResult.map((element, index) => (
                  <Link
                    key={index}
                    className='news_link'
                    to={{ pathname: '/article', state: element }}
                  >
                    <div className='news_middle_laptop_record'>
                      <div className='news_middle_laptop_record_date'>
                        <p>{element.date.slice(5)}</p>
                      </div>
                      <div className='news_middle_laptop_record_author'>
                        <p>{element.author.slice(0, 4)}</p>
                      </div>
                      <div className='news_middle_laptop_record_title'>
                        <p>{element.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div className='private_middle_laptop_yet'>
            <div className='private_middle_laptop_title'>
              <p>Yet</p>
            </div>
            <div className='overflow'>
              {!query &&
                bad.map((element, index) => (
                  <Link
                    key={index}
                    className='news_link'
                    to={{ pathname: '/article', state: element }}
                  >
                    <div className='news_middle_laptop_record'>
                      <div className='news_middle_laptop_record_date'>
                        <p>{element.date.slice(5)}</p>
                      </div>
                      <div className='news_middle_laptop_record_author'>
                        <p>{element.author.slice(0, 4)}</p>
                      </div>
                      <div className='news_middle_laptop_record_title'>
                        <p>{element.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              {query &&
                badResult.map((element, index) => (
                  <Link
                    key={index}
                    className='news_link'
                    to={{ pathname: '/article', state: element }}
                  >
                    <div className='news_middle_laptop_record'>
                      <div className='news_middle_laptop_record_date'>
                        <p>{element.date.slice(5)}</p>
                      </div>
                      <div className='news_middle_laptop_record_author'>
                        <p>{element.author.slice(0, 4)}</p>
                      </div>
                      <div className='news_middle_laptop_record_title'>
                        <p>{element.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className='private_middle_mobile'>
        {!query &&
          mobile.map((element, index) => (
            <Link
              className='news_link'
              key={index}
              to={{ pathname: '/article', state: element }}
            >
              <div className='news_middle_mobile_record'>
                <div className='news_middle_mobile_record_date'>
                  <p>{element.date.slice(5)}</p>
                </div>
                <div className='news_middle_mobile_record_class'>
                  <p>{element.class}</p>
                </div>
                <div className='news_middle_mobile_record_title'>
                  <p>{element.title}</p>
                </div>
              </div>
            </Link>
          ))}
        {query &&
          goodResult.map((element, index) => (
            <Link
              className='news_link'
              key={index}
              to={{ pathname: '/article', state: element }}
            >
              <div className='news_middle_mobile_record'>
                <div className='news_middle_mobile_record_date'>
                  <p>{element.date.slice(5)}</p>
                </div>
                <div className='news_middle_mobile_record_class'>
                  <p>{element.class}</p>
                </div>
                <div className='news_middle_mobile_record_title'>
                  <p>{element.title}</p>
                </div>
              </div>
            </Link>
          ))}
        <div className='private_middle_laptop'></div>
      </div>
    </div>
  );
}

export default Private;
