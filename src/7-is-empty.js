export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;

  if (type === "string") {
    return stringArrayOrObject === "";
  } else if (Array.isArray(stringArrayOrObject)) {
    return stringArrayOrObject.length === 0;
  } else if (type === "object") {
    return Object.keys(stringArrayOrObject).length === 0;
  }

  return false;
};

//test 3 needs [] to return true. create an else if statement for the empty array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

// test 5 need {} to return tue. create an else if statement for the empty object
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
