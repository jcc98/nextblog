---
title: 'Two Sums solution'
date: 'December 31, 2021'
excerpt: 'Array notes'
cover_image: '/images/posts/leetcode.png'
---

## Explanation

Given an array of integers *nums* and an integer *target*, return *indices* of the two numbers such that they add up to *target*. \
You may assume that each input would have *exactly one solution,* and you may not use the asme element twice. \
You can return the answer in any order.

eg. \
*Input:* nums = [2,7,11,15], target = 9 \
*Output:* [0, 1] \
*Output:* Because nums[0] + nums[1] == 9, we return [0, 1] \

## Solution

function twoSum(array, target) { \
  const map = new Map() \
  for (let i = 0; i < array.length; i++) { \
    const num1 = array[i] \
    const num2 = target - num1 \
    if (map.has(num2)) { \
      return [map.get(num2), i] \
    } \
    map.set(num1, i) \
  } \
} 