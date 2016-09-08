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
        self.hasError = false;
        self.form = {};

        self.user = {
            name: "",
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
                           .then(function (response) {
                               //success
                               self.message = 'You have successfully registered!';
                               self.hasError = false;
                           }, function (error) {
                               //error
                               self.message = 'Unable to register user: ' + error.message;
                               self.hasError = true;
                           });

                self.form.signup.$setPristine();
                self.form.signup.$setUntouched();
                self.user = {
                    name: "",
                    email: "",
                    mobile: "",
                    username: "",
                    password: ""
                };
            }
        };
    };

}(window.angular));