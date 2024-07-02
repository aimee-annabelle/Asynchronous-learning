const repeatEvery = (func,interval) => {
    setInterval(func,interval)
}

repeatEvery(()=> console.log('function run'),2000)