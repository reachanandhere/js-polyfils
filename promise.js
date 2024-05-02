function PromisePolyfill(executor) {
  let onResolve;
  let onReject;
  let isFullfilled = false;
  isRejected = false;
  let isCalled = false;
  let value;

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(err) {
    isRejected = true;
    value = err;
    if (typeof onReject === "function") {
      onReject(err);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    if (isFullfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }

    return this;
  };
  this.catch = function (callback) {
    onReject = callback;
    if (isFullfilled && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err)
  }
}

const examplePromise = new PromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

examplePromise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err));
