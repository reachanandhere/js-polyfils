function once(func, context) {
    let result;
    return function (args) {
        if (func) {
        result = func.apply(context || this, args);
        func = null;
        }
        return result;
    };
}

const hello = once(()=>console.log("Hello World"));
hello();
hello();