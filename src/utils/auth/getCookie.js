import cookie from "js-cookie";

// get from cookie such as stored token
// will be useful when we need to make request to server with token
const getCookie = key => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};

export default getCookie;
