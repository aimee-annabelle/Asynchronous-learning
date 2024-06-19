const createAlarm = (name,time) =>{
    return new Promise((resolve,reject)=>{
        if(time < 2) reject('Delay is not sufficient')
        setTimeout(()=>{
            resolve(`wake up ${name}`)
    },time*1000)
})
}
createAlarm('John', 4).then((message) => {
    console.log(message) // output "Wake up John" after 4 seconds
}).catch((error) => {
    console.error(error)
})