//  Bitwise ORs of Subarrays


// Given an integer array arr, return the number of distinct bitwise ORs of all the non-empty subarrays of arr.

// The bitwise OR of a subarray is the bitwise OR of each integer in the subarray. The bitwise OR of a subarray of one integer is that integer.

// A subarray is a contiguous non-empty sequence of elements within an array.




function subarrayBitwiseORs(arr) {
    const res = new Set();  // Global set for all unique ORs
    let cur = new Set();    // ORs ending at current index

    for (let num of arr) {
        const newCur = new Set();
        newCur.add(num);

        for (let prev of cur) {
            newCur.add(num | prev);
        }

        cur = newCur;
        for (let val of cur) {
            res.add(val);
        }
    }

    return res.size;
}
