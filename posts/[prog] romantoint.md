---
title: 'Roman to Integer Solution'
date: 'January 4, 2022'
excerpt: 'Roman to Integer Leetcode'
cover_image: '/images/posts/leetcode.png'
---

Given a roman numeral, convert it to an integer. \
**Note: 900 is CM, CD is 400, XC is 90, XL is 40, 9 is IX, IV is 4.**

var romanToInt = function(s) { \
    **Putting all the possible roman numeral combinations in an object:**  \
    var romanLetters = { 
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    } \
    **Integer that has the roman's value converted:** \
    let number = 0 \
    **Looping through the roman string**: \
    for (let i = 0; i < s.length; i++) { \
    **Looping through the object** \
        for (key in romanLetters) { \
    **First if statement: checks first + second roman letter at once (in case its value is 900, 400 etc...)** \
            if (s[i] + s[i+1] === key) { \
                number += romanLetters[key] \
                i++ \
            } \
    **Second if statement: checks one roman letter. adds the roman letter's value to the number if it matches** \
            else if (s[i] === key) { \
                number += romanLetters[key] \
            } \
        } \
    } \
    **Exits loop, returns number** \
    return number \
} 