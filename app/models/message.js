var mongoose = require('mongoose');

module.exports = mongoose.model('message', {
	message : {type: String},
	user: {type: String},
});
