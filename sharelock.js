var request = require('request');
var ld = require('lodash');
var validUrl = require('valid-url');

function Sharelock (uri) {
	if (!uri) {
		this.uri = 'https://sharelock.io';
	} else if (validUrl.isUri(uri)) {
		this.url = uri;
	} else {
		throw 'Invalid Sharelock URI specified: ' + uri;
	}
}

// Enables `var sharelock = require('sharelock').init(url);`
Sharelock.init = function (url) {
	return new Sharelock(url);
};

