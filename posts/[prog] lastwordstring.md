---
title: 'Length of Last Word '
date: 'January 12, 2022'
excerpt: 'Length of last word leetcode'
cover_image: '/images/posts/leetcode.png'
---
Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

<hr></hr>

    var lengthOfLastWord = function(s) {
    let arr = []
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[s.length -1] === " ") {

        }
        if (s[i] === " ") {
            break
        } else {
            arr.push(s[i])
        }
    }
    return arr.length
    };

*Need to solve non-space character issue issue*