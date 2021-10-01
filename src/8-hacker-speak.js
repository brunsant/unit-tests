export const hackerSpeak = (words) => {
  words = words

    .replace(/a/g, "4")
    .replace(/e/g, "3")
    .replace(/i/g, "1")
    .replace(/o/g, "0")
    .replace(/s/g, "5")

    .replace(/A/g, "4")
    .replace(/E/g, "3")
    .replace(/I/g, "1")
    .replace(/O/g, "0")
    .replace(/S/g, "5");
  return words;
};

//test 1 - formula:  replace(/"existing info"/g, "what's supposed to be")
// https://stackoverflow.com/questions/39031219/what-does-replace-n-g-something-mean/39031245

//test 2 - same thing
