import React from 'react';
import config from '../../config';
import { signOut } from '../../utils/auth';

const KakaoAuth = ({ isAuth, getNewsList }) => {
  const kakaoLogout = () => {
    signOut();
    getNewsList();
  };

  return (
    <div className='news_bottom_buttons'>
      <div id='kakao-add-channel-button'></div>
      {isAuth() ? (
        <div className='news_logout' onClick={kakaoLogout}>
          <p>카카오 로그아웃</p>
        </div>
      ) : (
        <a
          href={`https://kauth.kakao.com/oauth/authorize?client_id=${config.REACT_APP_KAKAO}&redirect_uri=${config.REACT_APP_REDIRECT}&response_type=code`}
        >
          <img
            src={require('../../assets/kakao-login.png')}
            alt='kakao-login'
          />
        </a>
      )}
    </div>
  );
};

export default KakaoAuth;
