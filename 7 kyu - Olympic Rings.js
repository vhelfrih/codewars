// 7 kyu - Olympic Rings
// To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

// Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

// Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

// if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

// Dots over i's and any other letters don't count as rings.

function olympicRing(a) {
  let score = 0;
  let one = [
    "a",
    "b",
    "e",
    "o",
    "g",
    "d",
    "p",
    "q",
    "Q",
    "A",
    "O",
    "D",
    "P",
    "R",
  ];
  let two = ["B"];

  [...a].map((el) => {
    if (one.includes(el)) {
      score++;
    } else if (two.includes(el)) {
      score = score + 2;
    }
  });

  let finalScore = Math.floor(score / 2);

  if (finalScore < 2) {
    return "Not even a medal!";
  } else if (finalScore == 2) {
    return "Bronze!";
  } else if (finalScore == 3) {
    return "Silver!";
  } else {
    return "Gold!";
  }
}
