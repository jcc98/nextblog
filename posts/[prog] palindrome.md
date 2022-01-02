---
title: 'Two Sums solution'
date: 'January 2, 2022'
excerpt: 'Palindrome Number'
cover_image: '/images/posts/leetcode.png'
---

Given an integer x, return true if x is palindrome integer. \
An integer is a palindrome when it reads the same backward as forward. \
For example, 121 is a palindrome while 123 is not. 

**Solution:** \
var isPalindrome = function(x) { \
    const convertedInt = String(x)  **Converts the int into a string** \
    const reversedInt = parseInt(convertedInt.split("").reverse().join(""))  **Splits the string into an array of substrings, reverses the string and then remake it into a string with the join method. Parse int is used at the end to convert the reversed string number into a true int number.** \
    if (reversedInt === x) {return true}  **Checks whether the reversed int value is the same as the x parameter. If so, returns true** \
    return false  **Else, returns false** \
};