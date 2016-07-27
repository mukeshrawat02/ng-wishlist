(function (controllers) {

    var authenticationController = require("./authenticationController");
    var userController = require("./userController");
    var data = require("../../data");

    controllers.init = function(router) {
        authenticationController.init(router, data);
        userController.init(router, data);
    };

})(module.exports);