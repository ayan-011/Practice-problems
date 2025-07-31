 


 
var join = function(arr1, arr2) {
    const obj = {}
    arr1.forEach(val=> obj[val.id] = val)
    arr2.forEach(val=> obj[val.id] = {...(obj[val.id]??{}),...val})
    return Object.values(obj);
};

const arr1 = [
  { id: 1, x: 36, d: 26, f: 35 },
  { id: 3, c: 20, z: 75 }
];

const arr2 = [
  { id: 2, o: 48, z: 84, y: 61 }
];

const result = join(arr1, arr2);
console.log(result);