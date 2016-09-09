/**
 * Created by Mukesh on 06/03/2016.
 */
(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("LoginController", loginController);

    loginController.$inject = ['userService', 'flashService', '$location'];

    function loginController(userService, flashService, $location) {
        var vm = this;
        //vm.form = {};

        vm.user = {
            username: "",
            password: ""
        };

        vm.save = function (isValid) {
            console.log("inside login " + isValid);
            if (isValid) {
                console.log("inside login");
                flashService.success('Login successful', true);
            }
        };
    };

}(window.angular));