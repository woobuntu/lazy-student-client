import cookie from 'js-cookie';

// remove from cookie
const removeCookie = key => {
  if (window !== 'undefined') {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export default removeCookie;
