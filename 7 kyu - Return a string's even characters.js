// 7 kyu - Return a string's even characters.
// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

function evenChars(string) {
  if (string.length < 2 || string.length > 100) return "invalid string";
  let res = [];
  let splitted = string.split("");

  splitted.map((el, idx) => {
    if (idx % 2 !== 0) {
      res.push(el);
    }
  });
  return res;
}
