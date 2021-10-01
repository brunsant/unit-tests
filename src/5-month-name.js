const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthName = (monthNumber) => {
  if (monthNumber < 1 || monthNumber > 12) {
    return null;
  }

  return months[monthNumber - 1];
};

//test 1,2 and 3 are solved by adding "-1", so it subtratct from the number askes. ex month 1 "-1" = 0
//test 4 and 5 - simple if statement
