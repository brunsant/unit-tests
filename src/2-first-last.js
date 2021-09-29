export const firstLast = (items) => {
  if (!items.length) {
    return "No items!";
  } else if (items.length === 1) {
    return `Only item: ${items[0]}`;
  } else {
    return `First: ${items[0]}, Last: ${items[items.length - 1]}`;
  }
};

//for the second test, we need to access the last name when in an array. to change the code, but have it to be correct to the others, we add the lenght -1 so it's correct for all cases

//for the 3 and 4, we add an if/else if statement to cover different situations. the first part refers to the 4 test. we inform that if item.length is "!" negative, it should return a message. the second part refers to the 3 test informing that  when the lenght is only 1 name, it should display the message+name
