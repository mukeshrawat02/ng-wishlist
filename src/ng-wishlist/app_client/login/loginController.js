(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("LoginController", loginController);

    loginController.$inject = ['authenticationService', 'flashService', '$location', '$rootScope'];

    function loginController(authenticationService, flashService, $location, $rootScope) {
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
                   .$promise
                   .then(function (response) {
                       //success
                       $rootScope.$emit('authorized');
                       $location.path('/dashboard');
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