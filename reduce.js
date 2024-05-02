//Array.reduce((accumulator, current, index, array) => {}, initialValue)

Array.prototype.myReduce = (callback, initialValue) => {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ?  callback(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = arr.myReduce((accumulator, current, index, array) => {
    return accumulator + current;
}, 0);

console.log(sum); // 36