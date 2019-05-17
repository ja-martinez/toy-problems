// Write a function that takes in a sorted array of unique integers and an integer value to search for and returns the index where that integer value occurs.

// 1. In O(n) time. What makes your solution O(n)?
// 2. In O(log n) time. HINT: We can achieve this by using an algorithm called binary search. Visualization: https://www.youtube.com/watch?v=P3YID7liBug 
// STOP WATCHING AT 2:40 so you don't spoil the answer!
// 3. What is meant by O(log n) time? Why is it faster that O(n) time?

const uglySearch = function (array, num) {
    let result = null;

    for (let index=0; index<array.length; index++) {
        if (array[index] === num) {
            return index;
        }
    }
    return result;
}

// 1. The solution is O(n) because in the worst case scenario, the function will run for however many numbers there are in the array;

// 2.

const binarySearch = function (array, num) {
    let midpoint = Math.floor(array.length / 2);
    //console.log(midpoint)
    if (array[midpoint] === num) {
        return midpoint;

    } else if(array[midpoint] > num) {
        return binarySearch(array.slice(0,midpoint), num);
    } else if(array[midpoint] < num) {
        return binarySearch(array.slice(midpoint+1, array.length), num) + midpoint + 1;
    }
}

// 3. log(n) means that 

const array = [1,2,3,4,5,6,7,8,9,10,11];

console.log(binarySearch(array, 11));