// set in localstorage
const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
export default setLocalStorage;
