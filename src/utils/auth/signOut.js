import removeCookie from './removeCookie';
import removeLocalStorage from './removeLocalStorage';
const signOut = () => {
  removeCookie('token');
  removeLocalStorage('user');
};

export default signOut;
