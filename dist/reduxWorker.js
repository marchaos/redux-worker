(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReduxWorker"] = factory();
	else
		root["ReduxWorker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var applyWorker = function applyWorker(worker) {
		return function (createStore) {
			return function (reducer, initialState, enhancer) {
				if (!(worker instanceof Worker)) {
					console.error('Expect input to be a Web Worker. Fall back to normal store.');
					return createStore(reducer, initialState, enhancer);
				}

				// New reducer for workified store
				var replacementReducer = function replacementReducer(state, action) {
					switch (action.type) {
						case 'REDUX_WORKER___STATE_UPDATE':
							return action.state;
						default:
							return state;
					}
				};

				// Create store using new reducer
				var store = createStore(replacementReducer, reducer({}, {}), enhancer);

				// Store reference of old dispatcher
				var next = store.dispatch;

				// Replace dispatcher
				store.dispatch = function (action) {
					if (window.disableWebWorker) {
						return next({
							type: 'REDUX_WORKER___STATE_UPDATE',
							state: reducer(store.getState(), action)
						});
					}
					worker.postMessage(action);
				};

				store.isWorker = true;

				// Add worker events listener
				worker.addEventListener('message', function (e) {
					if (typeof e.data.type === 'string') {
						next(e.data);
					}
				});

				return store;
			};
		};
	};

	var createWorker = function createWorker(reducer) {
		// Make initial state
		var state = reducer({}, {});

		self.addEventListener('message', function (e) {
			var action = e.data;

			if (typeof action.type === 'string') {
				// Set new state
				state = reducer(state, action);

				// Send new state to main thread
				self.postMessage({
					type: 'REDUX_WORKER___STATE_UPDATE',
					state: state,
					action: action
				});
			}
		});
	};
	exports.applyWorker = applyWorker;
	exports.createWorker = createWorker;
	exports.default = { applyWorker: applyWorker, createWorker: createWorker };

/***/ }
/******/ ])
});
;