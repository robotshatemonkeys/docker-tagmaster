var mongoose = require('mongoose'),
 		credentials = require('../utils/credentials.js');

var shopSchema = mongoose.Schema({
		name: String,
    token: String
});

shopSchema.methods.getToken = function(){
	return this.token;
};

var Shop = mongoose.model('Shop'+credentials.shortname, shopSchema);
module.exports = Shop;
