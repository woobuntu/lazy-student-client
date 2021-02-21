import axios from 'axios';

const getToken = async data => {
  try {
    const {
      data: { access_token },
    } = await axios({
      url: `https://kauth.kakao.com/oauth/token`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      data,
    });
    return access_token;
  } catch (kakaoError) {
    return alert(
      `카카오서버로부터 액세스 토큰을 받는데 실패했습니다, ${kakaoError}`,
    );
  }
};

export default getToken;
