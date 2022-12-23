// 7 kyu - Evens times last

// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
  if (numbers.length == 0) return 0;
  let evens = [];
  numbers.map((el, idx) => {
    idx % 2 == 0 ? evens.push(el) : null;
  });

  return evens.reduce((a, b) => a + b, 0) * numbers[numbers.length - 1];
}
