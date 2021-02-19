// remove from localstorage
const removeLocalStorage = key => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export default removeLocalStorage;
