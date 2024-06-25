// Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds
const displayNumber = (num) => {
  let timer = setInterval(() => {
    console.log(num);
  }, 2000);
  setTimeout(() => {
    clearInterval(timer);
    console.log('done')
  }, 5000);
};

displayNumber(2);
