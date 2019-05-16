// 1. Do callbacks have to be asynchronous? If not, write an example of a synchronous callback.

// 2. Write a function called callbackNamed that takes another named function as its sole parameter. Write a function called callbackAnonymous that takes an anonymous function as its sole parameter.

// 3. Write a function called getTodos that fetches the todos at https://jsonplaceholder.typicode.com/todos and brings them back via a promise. 

// 4. Refactor your getTodos function to fetch the same data but bring it back via a callback.

// 5. How does the call stack handle callback functions/promises? https://getpocket.com/a/read/1763210762




// 1. No because everything can stay in the call stack and is executed synchronously.

const get4 = () => 4;
const plus4 = (num, cb) => cb() + num;

// 2.

const callbackNamed = cb => cb(4);
const callbackAnonymous = cb => cb(4);

// 3.

const getTodos = () => {
    fetch ('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}

// 4.

