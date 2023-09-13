promises 

so you are going to be using stuff like promise.resolve
but catch this theres otheres as well that you will want to pay attion to these
JavaScript Promise Methods
There are various methods available to the Promise object.

Method          	    Description
all(iterable)	        Waits for all promises to be resolved or any one to be rejected
allSettled(iterable)	Waits until all promises are either resolved or rejected
any(iterable)	        Returns the promise value as soon as any one of the promises is fulfilled
race(iterable)         	Wait until any of the promises is resolved or rejected
reject(reason)	        Returns a new Promise object that is rejected for the given reason
resolve(value)	        Returns a new Promise object that is resolved with the given value
catch()	                Appends the rejection handler callback
then()	                Appends the resolved handler callback
finally()            	Appends a handler to the promise




Example 1: Program with a Promise
const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);

Run Code

Output

Promise {<resolved>: "There is a count value."}

In the above program, a Promise object is created that takes two functions:resolve() and reject().
resolve() is used if the process is successful
and reject() is used when an error occurs in the promise.

The promise is resolved if the value of count is true.