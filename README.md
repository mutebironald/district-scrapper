# Districts of Uganda

[![Build Status](https://travis-ci.com/mutebironald/district-scrapper.svg?token=uNbpByFVLu8G28ZejRXs&branch=master)](https://travis-ci.com/mutebironald/district-scrapper) [![Coverage Status](https://coveralls.io/repos/github/mutebironald/district-scrapper/badge.svg?branch=fix-travis-build)](https://coveralls.io/github/mutebironald/district-scrapper?branch=fix-travis-build)

## Installation

```js
npm install udistricts
```

### Working with the package

This package returns a promise. Therefore to access the district names, you will have to:

- require the package i.e

```js
 const names = require('udistricts')

names.path.then(districts => districts.map(d => console.log(d))).catch(error => console.log(error))
```

### Alternatively

- you can destructure the path from the package i.e

 ```js
  const { path } = require('udistricts')
  path.then(districts => districts.map(d => console.log(d))).catch(error => console.log(error))
```

**Have fun with it.**

### Author

Ronald Mutebi
