
 

 const isEmpty = function(obj){
     if(Array.isArray(obj)){    //check it is an array from isArray() method
        return obj.length === 0 //check it is empty or not
     }
     else{
        let arr = Object.keys(obj) //what is keys do= it convert keys into array from an object.
        return arr.length === 0;
     }
 }


 console.log(isEmpty([]))