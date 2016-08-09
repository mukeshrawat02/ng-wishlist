(function (userRoute) {
    
    var authenticationController = require("../controllers/authenticationController");
    var userController = require("../controllers/userController");

    userRoute.init = function (apiRouter) {
        apiRouter.route('/signup')
                 .post(userController.register);

        apiRouter.route('/login')
                  .post(authenticationController.login);

        apiRouter.route('/user')
                 .get(userController.getAllUser);

        apiRouter.route('/user:userId')
                 .get(userController.getUserById)
                 .post(userController.updateUser);
    };

})(module.exports);