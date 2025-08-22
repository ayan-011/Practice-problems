//  Power of Three


// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.


//?   EXAMPLES

// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 33

// Example 2:

// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.

// Example 3:

// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).

 


//? SOLUTION

const isPowerOfThree = n => {
    if (n <= 0) return false;
    const ternary = [...n.toString(3)];
    let count1 = 0;
    for (const c of ternary) {
        if (c === '1') count1++;
        if (c === '2') return false;
    }

    return count1 === 1;
}