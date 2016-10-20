(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("ForgotPasswordController", forgotPasswordController);

    forgotPasswordController.$inject = ['authenticationService', 'notificationService'];

    function forgotPasswordController(authenticationService, notificationService) {
        var vm = this;
        vm.username = "";

        vm.forgotLogin = function (isValid) {
            if (isValid) {

            }
        };
    }

}(window.angular));