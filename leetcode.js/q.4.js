//Apply Transform Over Each Element in Array


// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

//Solution ⬇


function map(arr, fn){
    let result = []
    for(i=0; i<arr.length; i++){
       result.push(fn(arr[i], i))
    }
 return result;
 }

 const arr = [1,2,3,4]
 const fn = (x,i) => x+i

 console.log(map(arr, fn))

 