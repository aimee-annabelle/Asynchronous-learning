const performFastAsync = async (url, timer) => {
  try {
    const controller = new AbortController();
    let timeControl;

    let response = fetch(url, { signal: controller.signal }).then(
      (response) => {
        clearTimeout(timeControl);
        return response.json();
      }
    );
    
    let timePromise = new Promise((resolve) => {
        timeControl = setTimeout(() => {
                controller.abort();
                resolve('Timeout settled first')
            }, timer);
    })

    let result = await Promise.race([response, timePromise]);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

performFastAsync("https://jsonplaceholder.typicode.com/todos/1", 10).then(
  (data) => {
    // console.log(data);
  }
).catch(err => console.log(err));
