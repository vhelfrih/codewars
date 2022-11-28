// 7 kyu - Filter unused digits
// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

function unusedDigits() {
  let zeroToNine = "0123456789";
  let res = [];
  let digits = [...arguments].join("");

  for (let i = 0; i < zeroToNine.length; i++) {
    if (!digits.includes(zeroToNine[i])) {
      res.push(zeroToNine[i]);
    }
  }
  return res.join("");
}
