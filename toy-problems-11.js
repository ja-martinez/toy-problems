// 1. Write a function called newMap that mirrors the functionality of native .map(). BONUS: Write it on the Array prototype.
// 2. Write a function called newFilter that mirrors the functionality of native .filter(). BONUS: Write it on the Array prototype.
// 3. Write a function called newReduce that mirrors the functionality of native .reduce(). BONUS: Write it on the Array prototype.
// 4. Write a function called factorial that returns the factorial of an integer. **Don't google it!** BONUS: What happening on the call stack when your function runs?


// 1.

function newMap (array, cb) {
    let map = [];

    for (let index=0; index<arrray.length; index++) {
        map.push(cb(array[index]));
    }
    return map;
}

Array.prototype.newMap = function (cb)  {
    let map = [];

    for (let index=0; index<this.length; index++) {
        map.push(cb(this[index]));
    }
}


// 2.

function newFilter (array, cb) {
    let filter = [];

    for (let index=0; index<array.length; index++) {
        if (cb(array[index])) {
            filter.push(array[index]);
        }
    }

    return filter;
}

Array.prototype.newFilter = function(cb) {
    let filter = [];

    for (let index=0; index<this.length; index++) {
        if (cb(this[index])) {
            filter.push(this[index]);
        }
    }
    return filter;
}

// 3.

function newReduce (array, accumulator=0, cb) {
    
    for (let index=0; index<array.length; index++) {
        accumulator = cb(accumulator, array[index]);
    }

    return accumulator;
}

Array.prototype.newReduce = function (accumulator=0, cb) {
    for (let index=0; index<this.length; index++) {
        accumulator = cb(accumulator, this[index]);
    }
    return accumulator
}

// 4.

function factorial (num) {
    let result = 1;
    
    for (let i=1; i<num+1; i++) {
        result *= i;
    }

    return result;
}

// the call stack is just running the function. after it finishes, it gets cleared