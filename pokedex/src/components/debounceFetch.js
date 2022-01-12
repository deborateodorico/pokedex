export const debouncePromise = (func, wait) => {
  let timer = null;
  return async function (...args) {
    clearTimeout(timer);
    await new Promise((resolve) => {
      timer = setTimeout(resolve, wait);
    });
    return func(...args);
  };
};

const debouncedFetch = debouncePromise(fetch, 1000);

export default debouncedFetch;
