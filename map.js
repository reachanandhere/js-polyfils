let arr = [1, 2, 3, 4, 5];

// Array.map((element, index, array) => {})

Array.prototype.myMap = function(callback){
    let newArr = [];
    for(let i=0;i<this.length;i++){
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
}

let newArr = arr.myMap((element, index, array) => {
    return element * 2;
});

console.log(newArr); 