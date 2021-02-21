import axios from 'axios';
import config from '../../config';
import authenticate from './authenticate';
import isAuth from './isAuth';

const getUserInfo = async (access_token, history, getNewsList) => {
  try {
    const userInfo = await axios({
      url: `${config.REACT_APP_API}/auth`,
      method: 'POST',
      data: {
        KAKAO_TOKEN: access_token,
      },
    });
    authenticate(userInfo);
    if (isAuth()) {
      history.push('/news');
      getNewsList();
    }
  } catch (apiError) {
    return alert(`lazy-student서버로부터 유저 정보를 받아오는데 실패했습니다.`);
  }
};

export default getUserInfo;
