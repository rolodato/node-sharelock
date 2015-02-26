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

Sharelock.prototype.create = function (secret, acl, cb) {
	var uri = this.uri;
	var options = {
		uri: uri + '/create',
		method: 'POST',
		json: {
			"d": secret,
			"a": parseAcl(acl)
		}
	};
	request.post(options, function (err, response, body) {
		if (!err && response.statusCode === 200) {
			return cb(null, uri + body);
		} else {
			return cb(err, null);
		}
	});
};

function parseAcl(acl) {
	if (acl.constructor === Array && acl.length > 0) {
		return acl.join(',');
	} else if (ld.isString(acl)) {
		return acl;
	} else {
		throw 'Invalid recipient list (ACL) specified: ' + acl;
	}
}

module.exports = Sharelock;
