import setCookie from "./setCookie";
import setLocalStorage from "./setLocalStorage";

// authenticate user by passing data to cookie and localstorage during signin
const authenticate = (response) => {
  setCookie("token", response.data.token);
  setLocalStorage("user", true);
  // next();
};
// authenticate는 일종의 미들웨어 역할을 하는 건데, 내가 미들웨어가 뭔지 모름
export default authenticate;
