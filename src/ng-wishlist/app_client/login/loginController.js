(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("LoginController", loginController);

    loginController.$inject = ['authenticationService', 'flashService', '$location'];

    function loginController(authenticationService, flashService, $location) {
        var vm = this;
        //vm.form = {};

        vm.user = {
            username: "",
            password: ""
        };

        vm.login = function (isValid) {
            if (isValid) {
                vm.dataLoading = true;

                authenticationService
                   .login(vm.user)
                   .then(function (response) {
                       //success
                       $location.path('/');
                   },
                   function (error) {
                       //error
                       flashService.error('Failed to signin : ' + error.data.message);
                       vm.dataLoading = false;
                   });
            }
        };
    };

}(window.angular));