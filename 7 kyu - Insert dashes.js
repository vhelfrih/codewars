// 7 kyu - Insert dashes
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
  let splitted = num.toString().split("");
  let res = "";

  function isOdd(num) {
    return num % 2 !== 0;
  }

  for (let i = 0; i < splitted.length; i++) {
    if (isOdd(splitted[i]) && isOdd(splitted[i + 1])) {
      res += splitted[i] + "-";
    } else {
      res += splitted[i];
    }
  }
  if (res.slice(-1) === "-") return res.slice(0, -1);
  return res;
}
