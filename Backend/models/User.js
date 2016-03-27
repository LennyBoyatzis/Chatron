'use strict';

const mongoose = require('mongoose');

/**
* User schema
*
**/

var UserSchema = mongoose.Schema({
	userId: String,
	username: String,
	password: String,
	name: String,
	currentlyOnline: { type: Boolean, default: false }
});

/**
 * Register
 */

var User = mongoose.model('User', UserSchema);

module.exports = User;
