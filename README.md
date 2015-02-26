A simple Node.js wrapper for [Sharelock](https://sharelock.io).

```js
// Public instance at https://sharelock.io
var sharelock = require('sharelock-client').init();

// Custom instance
var mySharelock = require('sharelock-client').init('https://example.com/sharelock');

var cb = function (err, url) {
  console.log(url);
};

sharelock.create('super secret', 'john@example.com', cb);

sharelock.create('more secrets', ['jack@example.com', '@twitter'], cb);
```
