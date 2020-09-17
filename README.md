# Typescript Promise Patterns

Different patterns for dealing with Promises implemented in Typescript.

## Why Use Promises?

Promises are a way to handle asynchronous processes that can take an unknown amount of time to complete. It represents the eventual completion or failure of an asynchronous process.

## Promise States

Promises will always have one of three states, **Pending**, **Resolved**, or **Rejected**. The state of the promise is what determines what code is eventually executed.
- **Pending** state is a newly created Promise that has not completed its asynchronous process.
- **Resolved** state is when a Promise has successfully completed its asynchronous process.
- **Rejected** state is when a Promise did not successfully complete its asynchronous process.

Consider the below code snippet. `SomeFunction()` will return a Promise and while `someFunction()` is currently executing, the state of the Promise is **Pending**. When `someFunction()` completes execution, the Promise will change from **Pending** to either **Resolved** if successful or **Rejected** if unsuccessful. If **Resolved**, `then()` will execute. If **Rejected**, `catch()` will execute.

```
return someFunction( ... ).then( ... ).catch( ... );
```

## Additional Info
_Mozilla Developer_: [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)