var request = require('request');
var _ = require('lodash');
var validUrl = require('valid-url');

function Sharelock (url) {
	if (validUrl.isUri(url)) {
		this.url = url;
	} else {
		throw 'Invalid Sharelock URL specified: ' + url;
	}
}

// Enables `var sharelock = require('sharelock').init(url);`
Sharelock.init = function (url) {
	return new Sharelock(url);
};

