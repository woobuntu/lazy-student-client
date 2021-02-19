import cookie from "js-cookie";
// set in cookie
const setCookie = (key, value) => {
  if (window !== "undefined") {
    //  window는 브라우저의 전역?객체인 모양
    cookie.set(key, value, {
      expires: 1 //쿠키의 유효기간을 1일로 잡은 것
    });
  }
};

export default setCookie;
