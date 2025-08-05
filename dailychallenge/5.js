//   Fruits Into Baskets II



// You are given two arrays of integers, fruits and baskets, each of length n, where fruits[i] represents the quantity of the ith type of fruit, and baskets[j] represents the capacity of the jth basket.

// From left to right, place the fruits according to these rules:

//     Each fruit type must be placed in the leftmost available basket with a capacity greater than or equal to the quantity of that fruit type.
//     Each basket can hold only one type of fruit.
//     If a fruit type cannot be placed in any basket, it remains unplaced.





function numOfUnplacedFruits(fruits, baskets) {
  const n = fruits.length;
  const used = new Array(n).fill(false); // to mark used baskets
  let placedCount = 0;

  for (let i = 0; i < n; i++) {
    const fruit = fruits[i];
    for (let j = 0; j < n; j++) {
      if (!used[j] && baskets[j] >= fruit) {
        used[j] = true;
        placedCount++;
        break; // move to next fruit
      }
    }
  }

  return n - placedCount; // number of unplaced fruits
}
