// 7 kyu - Count consonants

// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
  let count = 0;

  [...str].map((char) => {
    if (/[bcdfghjklmnpqrstvwxyz]/gi.test(char)) {
      count++;
    }
  });
  return count;
}
