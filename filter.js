let arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.myFilter = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) newArr.push(this[i]);    
  }
  return newArr;
};

let newArr = arr.myFilter((element, index, array) => {
  return element % 2 === 0;
});

console.log(newArr); // [2, 4, 6, 8]