<img src="http://bitcore.io/css/images/module-message.png" alt="widecore message" height="35">
# Widecoin Message Verification and Signing for Widecore


[![NPM Package](https://img.shields.io/npm/v/widecore-message.svg?style=flat-square)](https://www.npmjs.org/package/widecore-message)
[![Build Status](https://img.shields.io/travis/widecoin-project/widecore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/widecoin-project/widecore-message)
[![Coverage Status](https://img.shields.io/coveralls/widecoin-project/widecore-message.svg?style=flat-square)](https://coveralls.io/r/widecoin-project/widecore-message?branch=master)

widecore-message adds support for verifying and signing widecoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main widecore repo](https://github.com/widecoin-project/widecore) for more information.

## Getting Started

```sh
npm install widecore-message
```

```sh
bower install widecore-message
```

To sign a message:

```javascript
var widecore = require('widecore-lib');
var Message = require('widecore-message');

var privateKey = widecore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/widecoin-project/widecore/blob/master/CONTRIBUTING.md) on the main widecore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/widecoin-project/widecore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2020 The Widecoin Core Developers
