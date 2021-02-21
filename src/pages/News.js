import React, { useState, useEffect, useCallback } from 'react';
import queryString from 'query-string';
import { Kakao, KAKAO_APP_KEY } from '../utils/kakao';
import '../css/News.css';
import config from '../config';
import axios from 'axios';
import { isAuth, getCookie, getToken, getUserInfo } from '../utils/auth';
import { KakaoAuth, NewsLaptop, NewsMobile, NewsTop } from '../components/News';

function News({ history }) {
  const [state, setState] = useState([]);
  const [arrayOfC, setArrayOfC] = useState([]);
  const [arrayOfJ, setArrayOfJ] = useState([]);
  const [arrayOfF, setArrayOfF] = useState([]);
  const getNewsList = async () => {
    const token = getCookie('token');

    const axiosConfig = isAuth()
      ? {
          method: 'get',
          url: `${config.REACT_APP_API}/news/logined`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : { method: 'get', url: `${config.REACT_APP_API}/news` };

    try {
      const {
        data: { data },
      } = await axios(axiosConfig);
      setState(data);
      setArrayOfC(data.filter(element => element.class === '만물상'));
      setArrayOfJ(data.filter(element => element.class === '분수대'));
      setArrayOfF(data.filter(element => element.class === 'fn스트리트'));
    } catch (apiError) {
      alert(apiError);
    }
  };

  //카카오 로그인 함수
  const login = useCallback(
    async data => {
      const access_token = await getToken(data);
      getUserInfo(access_token, history, getNewsList);
    },
    [history],
  );

  useEffect(() => {
    Kakao.init(KAKAO_APP_KEY);
    getNewsList();
  }, []);

  useEffect(() => {
    const { code } = queryString.parse(history.location.search);
    const data = queryString.stringify({
      grant_type: 'authorization_code',
      client_id: config.REACT_APP_KAKAO,
      redirect_uri: config.REACT_APP_REDIRECT,
      code,
    });
    if (code && !isAuth()) login(data);
    Kakao.Channel.createAddChannelButton({
      container: '#kakao-add-channel-button',
      channelPublicId: '_yfzwxb',
      size: 'large',
    });
  }, [history.location.search, login]);

  return (
    <div className='news_body'>
      <NewsTop isAuth={isAuth} />
      <NewsMobile total={state} />
      <NewsLaptop C={arrayOfC} J={arrayOfJ} F={arrayOfF} />
      <KakaoAuth isAuth={isAuth} getNewsList={getNewsList} />
    </div>
  );
}

export default News;
