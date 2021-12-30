---
title: 'Random notes'
date: 'December 30, 2021'
excerpt: 'Random notes (JS/React)'
cover_image: '/images/posts/notes.jpg'
---
## dangerouslySetInnerHTML

dangerouslySetInnerHTML is a property that you can use on HTML elements in a React application to programmatically set their content. Instead of using a selector to grab the HTML element, then setting its innerHTML, you can use this property directly on the element. Use case: when the HTML comes from the server (and make sure it's safe before recklessly injecting it)
React diffing algorithm (https://reactjs.org/docs/reconciliation.html) 
is designed to ignore the HTML nodes modified under this 
attribute thereby slightly improving the performance. 
If we use innerHTML, React has no way to know the DOM is modified. 
The next time the render happens, 
React will overwrite the content that was manually injected with 
what it thinks the correct state of that DOM node should be. 

## Binary Tree
Tree data structure is a way to hold data that when vizualized looks like a tree in nature. 
All data points in the tree are called nodes. The top of the tree is called the root node; it branches out into additional nodes,
each of which may have more child nodes, and so on.
A binary tree can only have two branches.

Invert binary tree on JS \
// {value: 5, left: {...}, right: {...}}

function invertTree(node) { \
  let left = node.left \
  let right = node.right \
  node.right = left \
  node.left = right \
  invertTree(left) \
  invertTree(right) \
}

//

function invertTree(node) { \
  let left = node.left \
  node.left = node.right \ 
  node.right = left  \
  invertTree(node.left) \
  invertTree(node.right) \
}

## Object destructuring manipulation
Two objects: \
const original = {"a": "a", "b": "b", "c": "c"} \
const replace = {"b": "2", "c": "3"} \
Create a third object with the original properties and have them replaced with the 2nd objects properties: \
**const third = {...original, ...replace}**