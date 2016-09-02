/**
 * Created by Mukesh on 06/03/2016.
 */
(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("RegistrationController",
                       ['userService', registrationController]);

    function registrationController(userService) {
        var self = this;
        self.message = null;
        self.user = {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            username: "",
            password: ""
        };

        self.save = function (isValid)
        {
            if (isValid)
            {
                userService.registerUser(self.user)
                           .$promise
                           .then(function (weatherForecast) {
                               //success
                               self.message = 'You have successfully registered!';
                           }, function (error) {
                               //error
                               self.message = 'Unable to register user: ' + error.message;
                           });
            }
        };
    };

}(window.angular));