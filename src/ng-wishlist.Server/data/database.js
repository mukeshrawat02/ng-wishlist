(function (database) {
    var mongoose = require('mongoose');

    database.init = function (config) {
        // connect to the database
        mongoose.connect(config.database, function (err) {
            if (err) {
                throw err;
            }
            console.log('mongodb connected');

            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error..'));
            db.once('open', function callback() {
                console.log('favLister database opened');
            });
        });
    };

})(module.exports);