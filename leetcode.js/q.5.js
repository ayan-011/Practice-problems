//Filter Elements from Array


// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

//     arr[i] - number from the arr
//     i - index of arr[i]

// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.


//Solution ⬇



let filter = function (arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) { // Apply filter condition
            result.push(arr[i]); // Add element if it passes the test
        }
    }
    return result;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6];
const isEven = num => num % 2 === 0; // Filter only even numbers

console.log(filter(arr, isEven));