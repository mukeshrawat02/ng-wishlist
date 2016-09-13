(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("LoginController", loginController);

    loginController.$inject = ['authenticationService', 'flashService', '$location', '$localStorage'];

    function loginController(authenticationService, flashService, $location, $localStorage) {
        var vm = this;
        //vm.form = {};

        vm.user = {
            username: "",
            password: ""
        };

        vm.login = function (isValid) {
            alert(isValid);
            if (isValid) {
                vm.dataLoading = true;

                authenticationService
                   .login(vm.user)
                   .$promise
                   .then(function (response) {
                       //success
                       $localStorage.token = response.token;
                       $location.path('/');
                   },
                   function (error) {
                       //error
                       flashService.error('Failed to signin: ' + error.message);
                       vm.dataLoading = false;
                   });
            }
        };
    };

}(window.angular));