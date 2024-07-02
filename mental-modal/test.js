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

// new Promise((resolve) => {
//   console.log(1)
//   resolve()
// }).then(async () => {
//   console.log(2)
// }).then(async () => {
//   console.log(3)
// })

// new Promise((resolve) => {
//   console.log('a')
//   resolve()
// }).then(() => {
//   console.log('b')
// }).then(() => {
//   console.log('c')
// }).then(() => {
//   console.log('d')
// }).then(() => {
//   console.log('e')
// })

// const promise1 = Promise.reject('reject promise 1')
// const promise2 = Promise.reject('reject promise 2')
// const promise3 = Promise.reject('reject promise 3')

// Promise.any([promise1,promise2,promise3]).then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// });

// const guessTheOutPut =() => {

//   setTimeout(() => console.log("timeout"), 100);

//    setTimeout(() => console.log("apuuuuu"), 0);

//    setTimeout(() => console.log("hahha"), 0);

//    setTimeout(() => console.log("yaaaaa"));

//    setImmediate(() => console.log("immediate"));

//   Promise.resolve()
//     .then(() => console.log("promise"));

//   console.log('where do i fall')
// }

// console.log(guessTheOutPut())

// console.log('test')

// const calc =() => {
//  for(var i = 1; i <= 11; i++){
//     setTimeout(() => {
//        console.log(i)
//      }, 1000)
//   }
// }
// calc()

let a = 1
console.log(a)
setTimeout(() => {
  console.log('Timeout: ', a)
  a =2
}, 0)

setImmediate(() => {
  console.log('immediate:', a)
})

let p = new Promise((resolve, reject)=> {
   console.log('Am within a promise')
  resolve()
  a = 3
})

p.then(()=> console.log('am in promise:', a))

console.log('Am out in free space', a)