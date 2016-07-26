(function (controllers) {

    var authenticationController = require("./authenticationController");

    controllers.init = function (app) {
        authenticationController.init(app);
    };

})(module.exports);