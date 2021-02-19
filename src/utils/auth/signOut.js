import removeCookie from "./removeCookie";
import removeLocalStorage from "./removeLocalStorage";
const signOut = () => {
  removeCookie("token");
  removeLocalStorage("user");
};
// 일종의 미들웨어 역할을 하는 건데, 내가 미들웨어가 뭔지 모름

export default signOut;
