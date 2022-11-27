// 7 kyu - Length and two values
// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

function alternate(n, firstValue, secondValue) {
  let arr = [];

  Array.from({ length: n }).map((_, idx) => {
    idx % 2 !== 0 ? arr.push(secondValue) : arr.push(firstValue);
  });
  return arr;
}
