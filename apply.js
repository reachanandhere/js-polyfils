Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") throw new TypeError("Error");
  
  if (!Array.isArray(args)) throw new TypeError("Please provide an array as second argument");
  
  context.fn = this;
  context.fn(...args);
};

let obj = {
  name: "Sachin",
  age: "24",
};

let printdetails = function (location) {
  console.log(this.name + " " + this.age + " " + location);
};

printdetails.myApply(obj, ["Mumbai"]);
