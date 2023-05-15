import { FRUITS } from "./data";

export const getSuggestion = (keyword) => {
  const result = FRUITS.filter(
    (i) => i.substr(0, keyword.length).toLowerCase() === keyword.toLowerCase()
  );
  return new Promise((res) => {
    setTimeout(() => {
      res(result);
    }, 1000);
  });
};

export const debounce = (fn, delay = 500) => {
  let timerCtx;
  return function (...args) {
    const self = this;
    clearTimeout(timerCtx);
    timerCtx = setTimeout(() => fn.apply(self, args), delay);
  };
};
