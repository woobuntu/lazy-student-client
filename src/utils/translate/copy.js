const copy = target => {
  const type = Object.prototype.toString.call(target).slice(8, -1);
  let result = type === 'Array' ? [] : {};
  if (typeof target === 'object' && target !== null) {
    for (const prop in target) {
      result[prop] = copy(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};

export default copy;
