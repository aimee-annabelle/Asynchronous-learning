const fetchMultipleAPIs = async(urls) => {
  let fetchSingle = async(url)=>{
    let response = await fetch(url);
    return await response.json();
  }
  let requests = urls.map(el => fetchSingle(el));
  return requests;

  // let requests = urls.map(el => fetch(el));
  // let result = [];
//   Promise.all(requests).then(responses =>{
//     responses.forEach(response => response.json())
//     result = responses;
//     return responses
//   })
// return result;
}

const apiUrls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/5',
  'https://jsonplaceholder.typicode.com/todos/6'
];

fetchMultipleAPIs(apiUrls)
  .then(results => {
    console.log('Combined Results:', results);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });