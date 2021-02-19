import getCookie from "./getCookie";
// access user info from localstorage
const isAuth = () => {
  if (window !== "undefined") {
    // console.log(window);
    const cookieChecked = getCookie("token");
    // console.log(cookieChecked);
    if (cookieChecked) {
      // 인증된 유저에 대해서만 유저 정보에 관한 요청을 하려는 것이므로 토큰 여부를 확인하는 것
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

export default isAuth;
