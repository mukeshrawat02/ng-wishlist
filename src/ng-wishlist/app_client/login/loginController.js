(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("LoginController", loginController);

    loginController.$inject = ['authenticationService', 'notificationService', '$location', '$rootScope'];

    function loginController(authenticationService, notificationService, $location, $rootScope) {
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
                       $rootScope.$broadcast('authorized');
                       $location.path('/dashboard');
                   },
                   function (error) {
                       //error
                       console.log(error);
                       if (error.data) {
                           notificationService.error('Failed to signin : ' + error.data.message);
                       }
                       vm.dataLoading = false;
                   });
            }
        };
    }

}(window.angular));