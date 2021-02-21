import React from 'react';
import config from '../../config';

const KakaoAuth = () => {
  return (
    <div className='article_laptop_right'>
      <div className='article_not_logined'>
        <div>
          <a
            href={`https://kauth.kakao.com/oauth/authorize?client_id=${config.REACT_APP_KAKAO}&redirect_uri=${config.REACT_APP_REDIRECT}&response_type=code`}
          >
            <img
              src={require('../../assets/kakao-login.png')}
              alt='kakao-login'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default KakaoAuth;
