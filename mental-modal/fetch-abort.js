// Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms

const abortLongFetch = async (url) => {
    try {
        const controller = new AbortController();
        const signal = controller.signal;
        setTimeout(()=>{
            controller.abort();
        },10)
        const response = await fetch(url, {signal});
        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === 'AbortError') {
            return "Fetch timed out"
        }
    }
  };
  
  abortLongFetch('https://jsonplaceholder.typicode.com/todos/1').then(data => console.log(data))