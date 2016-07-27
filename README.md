# Why did you update, bruh?

[![Travis][build-badge]][build]
[![npm version](https://badge.fury.io/js/rn-why-did-you-update.svg)](https://badge.fury.io/js/rn-why-did-you-update)

### Intro

This is a fork of [Why did you update](https://www.npmjs.com/package/why-did-you-update). The logging is optimized for usage with react-native by
only using `console.log` and trying to minimize the amount of log calls.

### What?

![](http://i.imgur.com/Ui8YUBe.png)

A function that monkey patches React and notifies you in the console when **potentially** unnecessary re-renders occur. Super helpful for easy perf gainzzzzz.

### How to

```js
import React from 'react'

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}
```

You can include or exclude components by their displayName with the include and exclude options

```js
whyDidYouUpdate(React, { include: /^pure/, exclude: /^Connect/ })
```

### Credit

I originally read about how Benchling created a mixin to do this on a per component basis ([A deep dive into React perf debugging](http://benchling.engineering/deep-dive-react-perf-debugging/)).
That is really awesome but also tedious AF, so why not just monkey patch React.

[build-badge]: https://img.shields.io/travis/garbles/why-did-you-update/master.svg?style=flat-square
[build]: https://travis-ci.org/garbles/why-did-you-update
