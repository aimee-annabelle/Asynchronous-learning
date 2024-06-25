const fetchRetry = async(url,trials) =>{
    try {
        const response = await fetch(url);
        if(response.status !== 200 && trials > 0){
            trials--;
            fetchRetry(url,trials)
        }
        const data = await response.json();
        return data;

    } catch (error) {
        return error.message
    }
}

fetchData("https://jsonplaceholder.typicode.com/todos/1", 3)