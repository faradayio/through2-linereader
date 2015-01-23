# through2-linereader
Yet another line reader stream, uses through2

## Installation

```console
npm install through2-linereader
```

or

```console
npm install --save through2-linereader
```

## Usage

```javascript
var linereader = require('through2-linereader');

fs.createReadStream('helloWorld.log', 'utf8')
  .pipe(linereader())
  .on('data', function(line){
    console.log('I found a line.', line);
  })
```