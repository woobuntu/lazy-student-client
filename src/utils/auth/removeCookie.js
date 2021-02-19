import cookie from "js-cookie";

// remove from cookie
const removeCookie = key => {
  if (window !== "undefined") {
    //  window는 브라우저의 전역?객체인 모양
    cookie.remove(key, {
      expires: 1 //쿠키 지울 때도 유효기간이 필요함...?
    });
  }
};

export default removeCookie;
