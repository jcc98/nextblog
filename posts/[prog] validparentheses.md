---
title: 'Valid Parentheses'
date: 'January 7, 2022'
excerpt: 'Valid Parentheses Leet Code'
cover_image: '/images/posts/leetcode.png'
---

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

<hr></hr>

var isValid = function(s) {
    var stack = [];
    var map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    
    for(var i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '[')
            stack.push(s[i]);
        else if(map[stack.pop()] !== s[i]){
            return false;
        }
    }
    
    if(stack.length > 0)
        return false;
    else
        return true;
};

