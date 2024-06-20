const myFetch = (url) =>{
    return new Promise((resolve,reject)=>{
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange',() =>{
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
              } else if (request.readyState === 4) {
                reject("Could not fetch the data");
              }
        })
        request.open('GET',url)
        request.send()
    })
}