# Districts of Uganda

[![Build Status](https://travis-ci.com/mutebironald/district-scrapper.svg?token=uNbpByFVLu8G28ZejRXs&branch=master)](https://travis-ci.com/mutebironald/district-scrapper) [![Coverage Status](https://coveralls.io/repos/github/mutebironald/district-scrapper/badge.svg?branch=master)](https://coveralls.io/github/mutebironald/district-scrapper?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
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

### Contributing

Pull Requests are welcome. For major changes, please open an issue first to discuss what you would like to change

Please make sure to update tests as appropriate

### Author

Ronald Mutebi

**Have fun with it.**
