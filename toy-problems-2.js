// 1. createRange - Write function named createRange that will take a number and a default value and return an array of that many values. if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
// 2. letterCount - Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences. If you pass "Yo" it should return {Y: 1, o: 1}. If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}

// 1.
function createRange(num, value) {
  let answer = [];
  
    for (let x = 0; x < num; x++) {
        answer.push(value);
  }
  return answer;
}

// 2.
function letterCount(str) {
    let answer = {};

    // loop through the string characters
    for (let index = 0; index < str.length; index++) {
        let character = str[index];
        
        // check if character is already in the object
        if (answer[character]) {
            // add a new occurrence to that character
            answer[character]++;
        } else {
            // create a new key for that character
            answer[character] = 1;
        }
    }

    return answer;
}
