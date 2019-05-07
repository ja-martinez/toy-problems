//1. doubleNumbers - Write a function called doubleNumbers that takes an array of numerical values and returns a new array where every value in the original array has been doubled. For example if you pass it [1,2,3] then it should return [2,4,6]
//2. Acronym - Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array. If you pass ["Sue", "Will"] it should return "SW". If you pass ["Java", "Script", "Object", "Notation"] it should return "JSON".
//3. evenOccurrence - Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items. example usage:

function doubleNumbers (arr) {
    console.log(arr.map(x => x*2));
}