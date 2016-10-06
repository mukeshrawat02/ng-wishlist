(function(model) {
    var mongoose = require('mongoose');
    var userModel = require("./user")(mongoose);
    var noteModel = require("./note")(mongoose);

    model.User = userModel;
    model.Note = noteModel;
    
})(module.exports);