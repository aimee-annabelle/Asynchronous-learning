const fetchMultipleAPIs = async(urls) => {
  let requests = urls.map(el => fetch(el).then(data => data.json()));
  let result = await Promise.all(requests).then(data=> data);
  return result;
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