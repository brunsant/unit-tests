export const filterNumbers = (array, largerThan) => {
  return array.filter((element) => !(element > largerThan));
};

// similar to number 3. you filter elements that are smaller than the second argument (25)
