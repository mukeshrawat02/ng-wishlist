/**
 * Created by Mukesh on 06/03/2016.
 */
(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("RegistrationController", registrationController);

    registrationController.$inject = ['userService', 'flashService', '$location', '$timeout'];

    function registrationController(userService, flashService, $location, $timeout) {
        var vm = this;
        vm.form = {};

        vm.user = {
            name: "",
            email: "",
            mobile: "",
            username: "",
            password: ""
        };

        vm.save = function (isValid) {
            if (isValid) {
                userService
                    .registerUser(vm.user)
                    .$promise
                    .then(function (response) {
                        //success
                        flashService.success('Registration successful', true);
                        $location.path('/login');

                        $timeout(function () {
                            flashService.clear();
                        }, 3000);

                    }, function (error) {
                        //error
                        flashService.error('Unable to register user: ' + error.message);
                    });
            }
        };
    };

}(window.angular));