(function (userRoute) {
    
    var authenticationController = require("../controllers/authenticationController");
    var userController = require("../controllers/userController");

    userRoute.init = function (apiRouter) {
        apiRouter.route('/signup')
                 .post(userController.register);

        apiRouter.route('/login')
                 .post(authenticationController.login);
    };

})(module.exports);