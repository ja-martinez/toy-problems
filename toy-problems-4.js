function fibonacciGenerator () {
    let prevNum = 0;
    let currentNum = 1;

    return function () {
        let currentHolder = currentNum;
        currentNum = currentNum + prevNum;
        prevNum = currentHolder;
        return prevNum;
    } 
}

let fibonacci = fibonacciGenerator();
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
