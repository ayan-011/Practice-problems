//To Be Or Not To Be

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 


//Solution ⬇

function expect(val) {
  return {
    toBe(expected) {
      if (val === expected) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe(expected) {
      if (val !== expected) {
        return true;
      }
      throw new Error("Equal");
    }
  };
}

// Test Cases
try {
  console.log(expect(5).toBe(5)); // true
  console.log(expect(5).notToBe(10)); // true
} catch (error) {
  console.error(error.message);
}

try {
  console.log(expect(5).toBe(10)); // Error: Not Equal
} catch (error) {
  console.error(error.message);
}

try {
  console.log(expect(5).notToBe(5)); // Error: Equal
} catch (error) {
  console.error(error.message);
}


// Error Case
// expect(5).toBe(10); // Test Failed ❌: Expected 10, but got 5


// but expect(5).toBe(10) //not passed.
// but expect(5).notToBe(5) //not passed.

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */