//Sleep


 
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Note that minor deviation from millis in the actual sleep duration is acceptable.


 

async function sleep(millis){
    await new Promise(resolve => setTimeout(resolve, millis)) 
}


    let t = Date.now()
    sleep(100).then(() => console.log(Date.now() - t)) // 100
