// require packages
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// init model
var bookModel = new Schema({
	title: String,
	author: String,
	genre: String,
	read: {
		type: Boolean, 
		default: false
	}
});

module.exports = mongoose.model('Book', bookModel);