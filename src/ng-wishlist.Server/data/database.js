(function (database) {
    "use strict";

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/favLister'); // connect to our database


})(module.exports);