(function (user) {

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var UserSchema = new Schema({
        name: String,
        email: String,
        mobile: INT
    });
    mongoose.model('User', UserSchema);

})(module.exports);