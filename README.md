# Typescript Promise Patterns

Different patterns for dealing with Promises implemented in Typescript.

## Why Use Promises?

Promises are a way to handle asynchronous processes that can take an unknown amount of time to complete. It represents the eventual completion or failure of an asynchronous process.

## Promise States

Promises will always have one of three states, **Pending**, **Resolved**, or **Rejected**. The state of the promise is what determines what code is eventually executed.
- **Pending** state is a newly created Promise that has not completed its asynchronous process.
- **Resolved** state is when a Promise has successfully completed its asynchronous process.
- **Rejected** state is when a Promise did not successfully complete its asynchronous process.

Consider the below code snippet. `someFunction()` will return a Promise and while `someFunction()` is currently executing, the state of the Promise is **Pending**. When `someFunction()` completes execution, the Promise will change from **Pending** to either **Resolved** if successful or **Rejected** if unsuccessful. If **Resolved**, `then()` will execute. If **Rejected**, `catch()` will execute.

```
return someFunction( ... ).then( ... ).catch( ... );
```

## Promise Chaining

Chaining allows for synchronous execution of two or more asynchronous processes. This is done by chaining `.then()` and/or `.catch()` callbacks one after the other. Each callback returns a new Promise and is expected to return the status of the new Promise to continue the chain.

```
return someFunction( ... ).then( ... ).then( ... ).catch( ... ).then( ... );
```

In the above code snippet, each `.then()` will only execute if the previous `.then()` returns a **Resolved** Promise state. If the Promise state is either **Pending** or **Rejected**, `then()` will not execute. Also, notice the `catch()` in the middle of the chain. Any number of `.then()` and `.catch()` can be chained to each other. In the code snippet, if the first `.then()` returns a **Rejected** Promise, the execution of the code will jump straight to the first `.catch()`, ignoring the second `.then()` entirely. The last `.then()` will execute if the `.catch()` returns a **Resolved** Promise.

## Additional Info
_Mozilla Developer_: [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
