// 7 kyu - Divide and Conquer
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.
function divCon(x) {
  let str = [];
  let num = [];

  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] == "string") {
      str.push(parseInt(x[i]));
    } else {
      num.push(x[i]);
    }
  }

  return num.reduce((a, b) => a + b, 0) - str.reduce((a, b) => a + b, 0);
}
