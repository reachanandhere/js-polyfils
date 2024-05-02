Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== "function") throw new TypeError("Cannot be bound as it's not callable");
    
    context.fn = this;
    return function (...newArgs) {
        return  context.fn(...args, ...newArgs);
    };    
  };
  
  let obj = {
    name: "Sachin",
    age: "24",
  };
  
  let printdetails = function (location) {
    console.log(this.name + " " + this.age + " " + location);
  };
  
  let fn = printdetails.myBind(obj);
  console.log(fn("Mumbai"))