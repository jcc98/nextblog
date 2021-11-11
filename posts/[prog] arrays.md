---
title: 'Array destructuring & Looping'
date: 'November 9, 2021'
excerpt: 'Array notes'
cover_image: '/images/posts/array.png'
---

## Array notes

Quickly assign variables from an array: 
- *`const array = [1, 2, 3]`* 
- *`const [x, y, z] = array`*
- *`-> x = 1, y = 2, z = 3`*

Quickly swap the value between 2 variables: \
*`[main, secondary] = [secondary, main]`*

When array destructuring, you can skip a value by leaving it blank and following it with a comma: 
- *`const array = [1, 2, 3]`*
- *`const [a, , b]`*
- *`-> a = 1, b = 3`*

Default values: 
- *`const [p = 1, q = 1, r = 1] = [8, 9]`*
- *`console.log(p, q, r) = 8, 9, 1`*
- *`-> r is not destructured, so it defaults to 1`*