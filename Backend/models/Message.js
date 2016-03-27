'use strict';

const mongoose = require('mongoose');

/**
* Message schema
*
**/

var MessageSchema = mongoose.Schema({
	from: String,
	content: String,
});

/**
 * Register
 */

var Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
