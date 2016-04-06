# redux-worker

Redux-Worker is a [middleware](http://redux.js.org/docs/advanced/Middleware.html) for [Redux](https://github.com/reactjs/redux).

It helps you build multi-thread JavaScript applications by moving your reducer into a Web Worker. It also provide a simple [API](https://github.com/chikeichan/redux-worker/blob/master/API.md) for you to register tasks to be executed in the web worker outside of Redux. 

## Documentation
See [API](https://github.com/chikeichan/redux-worker/blob/master/API.md)

## Inspiration

Web worker has been around for several years now, but we have not yet seen much adoption from the community. I think the following reasons are to blamed:
  - Complexity of setting up since everything has to be asynchronous (pass messages back and forth)
  - Need to think in different context for web worker (cannot share function/references between threads)
  
It used to be difficult to conceptualize how to harness the power of Web Workers in a MVC application due to the constraint above. However, Redux has changed the way we think about building application in JavaScript, and its three main principles - single source of truth, pure functions, and read-only state - made moving your app logic into a totally separate task an effortless task.

If you are not familiar with web workers, I'd recommend starting with the following materials.
 - [How fast are web workers?](https://hacks.mozilla.org/2015/07/how-fast-are-web-workers/) - by Guillaume Cedric Marty
 - [Using Web Workers for more responsive apps](https://www.youtube.com/watch?v=Kz_zKXiNGSE) - by Jason Teplitz

## Limitation

The main purpose of Redux-Worker is to provide a simple way to start using web workers in your Redux applications. It does so by enhancing your Redux store with:
  - A dispatcher that post message to Web Worker
  - A replacement reducer that listen to message from Web Worker and then update state
  - A mechanism to register and execute task in Web Worker using the dispatcher, which return a promise that will resolve when the task is done. 
  
It spawns just one Web Worker instance, so don't give it more credit than it deserves. It does not provide an interface for spwarning multiple workers and balancing work between, which is a much more complicated problem and not one that Redux-Worker is trying to solve. 

## Demos
  - [N-Queen Solver](http://chikeichan.github.io/redux-worker/demo/nqueen/index.html)

To run the demo locally, cd into the demo directory, and then:
```bash
npm i
webpack-dev-server
```
 
