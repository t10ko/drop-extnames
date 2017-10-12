# drop-extnames

Because I needed to drop all extnames from path too many times.

## Install

```bash
npm install --save drop-extnames
```

## API

### `dropExts(path)`

_path_: `String` (file path)
Return: `String`

*Example*:

```js
let dropExts = require('drop-extnames');

dropExts('anywhere/something.tar.gz');  //  = 'anywhere/something'
dropExts('something.tar.gz');           //  = 'something'
```
