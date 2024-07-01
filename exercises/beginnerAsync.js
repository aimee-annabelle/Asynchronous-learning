// a function that uses `setTimeout` to log "Hello, World!" to the console after 2 seconds.

const helloWorldTimer = () => {
    setTimeout(()=>{
        console.log('Hello world');
    }, 2000)
}
helloWorldTimer()
// a function that takes a callback and executes it after 3 seconds using `setTimeout`

const timerCallback = (callback) =>{
    setTimeout(()=>{
        callback()
    },3000)
}
timerCallback()
// Using `setInterval`, write a function that logs "Tick" to the console every second

const intervalTick = () => {
    setInterval(()=>{
        console.log('Tick');
    },1000)
}
intervalTick()
// Write a Promise that resolves with "Success!" after 1 second. Log the result to the console.

const promise = new Promise((resolve) => {
    setTimeout(()=>{
        resolve('Success!')
    },1000)
})

promise.then(result => console.log(result))

// Create a Promise that rejects with "Error!" after 2 seconds. Handle the error using `.catch()`.
const promiseReject = new Promise((_, reject) => {
    setTimeout(()=>{
        reject('Error!')
    },2000)
})
promiseReject.catch(err => console.log(err))

// Using the Fetch API, write a function to fetch data from an API endpoint and log the response to the console.
// Write an asynchronous function using `async`/`await` to fetch and log data from an API.
const fetchData = async(url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Unable to fetch data')
        const data = await response.json();
        return data;     
    } catch (error) {
        alert(error)
    }
}

fetchData('https://reqres.in/api/users/2').then(data => console.log(data))

//  Create a simple callback function that multiplies two numbers and then calls a callback with the result.

const callbackFunct = (a,b,callback) =>{
    const result = a*b;
    callback(result)
}

callbackFunct(1,4,(result)=>{
    console.log(result);
})