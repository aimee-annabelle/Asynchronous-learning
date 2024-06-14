const randomPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const resolver = Math.random() > 0.5;
    if (resolver) {
      resolve("Hello World");
    } else {
      reject("Error occurred");
    }
  }, 2000);
});

randomPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
