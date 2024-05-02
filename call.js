Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  context.fn = this;
  context.fn(...args);
};

let name = {
  name: "Sachin",
  age: "24",
};

let printdetails = function (location) {
  console.log(this.name + " " + this.age + " " + location);
};

printdetails.myCall(name, "Mumbai"); // Sachin 24
