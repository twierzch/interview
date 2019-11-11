export default (func) => {
  if (typeof func !== 'function') {
    return;
  }

  const cache = {};

  return (...args) => {
    const isCached = args.every((val, idx) => cache[idx] === val)
      && !!cache.value;

    if (isCached) {
      return cache.value;
    }

    args.forEach((val, idx) => cache[idx] = val);
    const value = func(...args);
    cache.value = value;

    return value;
  }
}
