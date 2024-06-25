const fetchToDo = async(url) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            console.log(data);
        } else if(request.readyState === 4){
            console.error('Failed to fetch data',request.error)
        }
    })
    request.open('GET',url)
    request.send()
}

fetchToDo('https://jsonplaceholder.typicode.com/todos/1')