// Promise Chain

// const promise = new Promise((resolve, reject) => {
//     console.log('Promise created');
//     resolve('First resolve');
//   });
  
//   promise
//     .then((result) => {
//       console.log(result);
//       return 'Second resolve';
//     })
//     .then((result) => {
//       console.log(result);
//       throw new Error('Error in chain');
//     })
//     .catch((error) => {
//       console.error('Caught:', error.message);
//     })
//     .then(() => {
//       console.log('After catch');
//     });
new Promise((resolve) => {
  console.log(1)
  resolve()
}).then(async () => {
  console.log(2)
}).then(async () => {
  console.log(3)
})

new Promise((resolve) => {
  console.log('a')
  resolve()
}).then(() => {
  console.log('b')
}).then(() => {
  console.log('c')
}).then(() => {
  console.log('d')
}).then(() => {
  console.log('e')
})