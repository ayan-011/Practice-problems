//  Cache With Time Limit


// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.



class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const exists = this.cache.has(key);

    if (exists) {
      clearTimeout(this.cache.get(key).timeout);
    }

    const timeout = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, timeout });
    return exists;
  }

  get(key) {
    const cached = this.cache.get(key);
    return cached ? cached.value : -1;
  }

  count() {
    return this.cache.size;
  }
}






//WRONG VERSION 


//  class timeLimitedCache  {
//     constructor(){

//        this.cache = new Map();
//     }
       

//      set(key, value, duration){ 


//            const alreadyExist = this.cache.get(key)

//            if(alreadyExist){
//             clearTimeout(alreadyExist.cacheTimeout)
//            }


//             const cacheTimeout = setTimeout(()=>{
//                   this.cache.delete(key) 
//             }, duration)

//             this.cache.set(key, {value, cacheTimeout})
//              return Boolean(alreadyExist)
//      }
//      get(key){
//         const cached = this.cache.has(key)
//           if(cached){
//             return this.cache.get(key).value
//           }
//           return -1
//      }
//      count(){ 
//         return this.cache.size
//      }

