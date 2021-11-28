---
title: 'Tailwind notes'
date: 'November 28, 2021'
excerpt: 'Quick Tailwind notes.'
cover_image: '/images/posts/tailwind.jpg'
---

**Background color:** bg-blue-xxx (change number depending on desired contrast) \
**Font color:** text-xxx (color name) \
**Make font bold:** font-bold \
**Padding:** on Y axis: py-x on X axis: px-x (x is a number or value (eg. auto, percentages...) that determines the amount of padding added, uses rem) \
**Margin:** Same as padding but replace p with m | For individual margin/padding: mt-x (margin top) mb-x (margin bottom) ... \
**Make it rounded:** rounded | For more rounding: rounded-lg
Hover hover:xxx (x is property) \
**Container class:** Very opinionated. Doesn't have a bunch of default values like other frameworks (eg. Bootstrap...) \
It does however have default breakpoints for media queries. \
**Change position:** relative/absolute/flex/grid \
**Media queries:** sm:inline (It will make the element's type inline on smaller screens and up. Mobile screens won't be affected) \
**Width:** max-w-sm (max width, small size) \
**Shadow:** shadow-x (sm,md, xl,..) \
**mx-auto:** centers div \
**Make text uppercase:**  Uppercase \
**Flex properties:** items-xxx (start, end, center, baseline, stretch) \
**items-stretch:** stretches items to fill the container's cross axis \
**w-full** = width 100%

*Advantages of Tailwind: Doesn't have premade CSS components and is fully modular unlike Bootstrap, which means that you can make your own custom layouts while being able to build them quickly and have the design look consistent.*