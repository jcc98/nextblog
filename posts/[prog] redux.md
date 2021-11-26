---
title: 'Redux notes'
date: 'November 25, 2021'
excerpt: 'Notes taken from a Redux crash course to solidify my understanding about it.'
cover_image: '/images/posts/redux.png'
---

## Store
Store is the place where the reducer function is stored. \
To import it: `{createStore} from "redux"` \
To save the reducer function: `let store = createStore(counter)` \
To display it in the console: \
`store.subscribe(() => console.log(store.getState()));`

---

## Action
Function that returns an object of the action. \
`const increment = () => { return { name: "INCREMENT" }` \
`const decrement = () => {return {name: "DECREMENT"}}` \
*Note: most people name the action as "type"*

---

## Reducer
Passes on the state & action and executes it. It uses a switch statement to execute the code depending on the corresponding action type. \
 `const counter = (state = 0, action) => {` \
 `switch(action.type) {` \
 `case "INCREMENT": return state + 1 }` \
 `case "DECREMENT": return state - 1 }`
<br/>}
 
*The initial state is defined in the parameters (state = 0)*

---

## Dispatch

To execute the action, "dispatch" needs to be fired:
`store.dispatch(function here)`
In our example: `store.dispatch(increment())` \
To run redux in a particular component after it's been set-up, you must import {useSelector} from "react-redux" \
Define the state that we want to use: \
const dispatch = useDispatch() \
To send a parameter to the dispatch function, you have to define it in the actions file. A common practice is naming it as payload.

---

## Combine Reducers

You can only pass one reducer to the createStore function: \
`const store = createStore(reducer)` \
`createStore(counterReducer, loginReducer)` wouldn't be valid.
To pass two reducers, one must import "combineReducers". Creating an independent index.js file in the reducer folder for the aforementioned "combineReducer" is common practice. \
To create a combineReducers function: 
`const allReducers = combineReducers({counter: counterReducer})` \
The function name (on the right) needs to be consistent to our imported function, we can however give it whatever name we want. (in our case, counter) \
*ES6 common practice: by not assigning it a name (only calling the function), ES6 automatically assigns the same name as the reducer function.* \
`const allReducers = combineReducers({counterReducer}) === combineReducers({counterReducer: counterReducer)}` \
*When importing the combineReducers function from index.js located in the reducers folder, you don't have to specify the name when importing it. (import allReducer from "./reducers" is valid) webpack takes care of the naming.*

---

## Redux devtools extension
Can check the redux state on chrome's console.
 
---

## Hooking redux to the app
`import {Provider} on the root App file` \
Pass in store as argument, then wrap everything with `<Provider store={store}></Provider`>

---

## Recap
You create a store which holds all of our states.
You can have multiple reducers depending on what you want to do. (eg. authentication reducer, movielist reducer,...)
 -> Related action states go all in the same reducer and get checked with switch. \
You then dispatch an action. An action is an object that holds our type of the mentioned action.
The reducer is then going to look at what was dispatched by using switch, and will return the piece of state that belongs to its state. \
*Note: Redux has a lot of boilerplate, so it's not worth using it for a small app.* \
For a small app, uplifting the state or using Context would be a better idea.
Redux is good for large apps with scaleability in mind. \
In a real project, it is good practice to keep the actions and reducers in separate respective folders.