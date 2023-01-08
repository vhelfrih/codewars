// 7 kyu - Compare Strings by Sum of Chars

// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

function compare(s1, s2) {
  if (s1 == null) s1 = "";
  if (s2 == null) s2 = "";
  if (!/^[a-zA-Z]+$/.test(s1)) s1 = "";
  if (!/^[a-zA-Z]+$/.test(s2)) s2 = "";

  let s1Upper = s1.toUpperCase();
  let s2Upper = s2.toUpperCase();

  let s1Sum = 0;
  let s2Sum = 0;

  for (let i = 0; i < s1Upper.length; i++) {
    s1Sum += s1Upper[i].charCodeAt(0);
  }
  for (let i = 0; i < s2Upper.length; i++) {
    s2Sum += s2Upper[i].charCodeAt(0);
  }
  return s1Sum == s2Sum;
}
