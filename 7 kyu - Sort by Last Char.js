// 7 kyu - Sort by Last Char
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

function last(x) {
  return x.split(" ").sort(function (a, b) {
    let x = a.slice(-1);
    let y = b.slice(-1);
    return x == y ? 0 : x > y ? 1 : -1;
  });
}
