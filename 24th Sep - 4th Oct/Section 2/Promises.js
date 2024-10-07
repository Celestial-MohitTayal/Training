const myPromise = new Promise((resolve, reject) => {
  const success = false; // Simulating success or failure

  if (success) {
    resolve("Operation succeeded!"); // Fulfills the promise
  } else {
    reject("Operation failed!"); // Rejects the promise
  }
});

myPromise
  .then((result) => {
    console.log(result); // Outputs: Operation succeeded!
  })
  .catch((error) => {
    console.error(error);
  });



  //Promise Chaining

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Fetched Data');
      }, 2000);
    });
  };

  fetchData()
    .then((data) => {
      console.log(data); // Outputs: Fetched Data
      return 'Processing Data'; // Return another value for the next .then
    })
    .then((processedData) => {
      console.log(processedData); // Outputs: Processing Data
    })
    .catch((error) => {
      console.error('Error:', error);
    });


//Promise.all()
const promise1 = Promise.resolve(3);
                const promise2 = 42;
                const promise3 = new Promise((resolve, reject) => {
                  setTimeout(resolve, 100, 'foo');
                });
                
                Promise.all([promise1, promise2, promise3])
                  .then((values) => {
                    console.log(values); // Outputs: [3, 42, 'foo']
                  })
                  .catch((error) => {
                    console.error('One of the promises failed:', error);
                  });


//Promise.race()
const promiseA = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'A');
  });
  const promiseB = new Promise((resolve, reject) => {
    setTimeout(resolve, 50, 'B');
  });

  Promise.race([promiseA, promiseB])
    .then((value) => {
      console.log(value); // Outputs: 'B' (the first to resolve)
    });
