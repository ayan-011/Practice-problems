//Function Composition


// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.



 
var compose = function(fn) {
    
    return function(x) {
        return fn.reduceRight((acc, fn) => fn(acc), x);
    }
};
    const fn = [x=> x+1, x=> x*x , x=> 2*x]
    const composed = compose(fn)
    
   console.log(composed(4))

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */



 