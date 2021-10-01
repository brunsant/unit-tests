export const hashtags = (text) => {
  return text.split(" ").filter((v) => v.startsWith("#"));
};

// split and filter with startsWith
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
