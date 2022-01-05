---
title: 'Longest Common Prefix'
date: 'January 5, 2022'
excerpt: 'Longest Common Prefix Leetcode'
cover_image: '/images/posts/leetcode.png'
---

Write a function to find the longest common prefix string amongst an array of strings. \
If there is no common prefix, return an empty string "". 

<hr></hr>

var longestCommonPrefix = function(strs) { \
  if (!strs.length) return '' \
  let prefix = '' \
  **Find shortest string in the array:** \
  let maxPrefixLength = Math.min(...strs.map(str => str.length)) \
  **For loop using the shortest string's length** \
  for (let i = 0; i < maxPrefixLength; i++) { \
    let char = strs[0][i] \
    **Checks if the first strings letters match with the other strings in the array using the every method:** \
    if (strs.every(str => str[i] === char)) { \
      prefix += char \
    } else { \
      break \
    } \
  }; \
  return prefix; \
}; 