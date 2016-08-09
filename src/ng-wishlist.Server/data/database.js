﻿(function (database) {
    var mongoose = require('mongoose');

    database.init = function (config) {
        // connect to our database
        mongoose.connect(config.database, function (err) {
            if (err) {
                throw err;
            }

            console.log('Successfully connected to MongoDB');
        });
    };

})(module.exports);