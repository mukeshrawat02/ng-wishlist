(function (database) {
    var mongoose = require('mongoose');

    database.init = function (config) {
        mongoose.connect(config.database); // connect to our database
    };

    database.getDb = function () {

    };
   

})(module.exports);