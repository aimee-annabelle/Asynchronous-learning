const delayedTwo = (callback) => {
    return setTimeout(() => {
        callback()
    }, 2000);
}

function display_message() {
    console.log('Hello!');
  }

delayedTwo(display_message)