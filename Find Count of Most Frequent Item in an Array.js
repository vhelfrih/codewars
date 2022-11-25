function mostFrequentItemCount(collection) {
  const counts = {};
  for (const num of collection) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return Object.values(counts).reduce((a, b) => Math.max(a, b), 0);
}

console.log(mostFrequentItemCount([3, -1, -1])); //, 2;
console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
); //, 5);
