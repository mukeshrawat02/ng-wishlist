(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("NavbarController", navbarController);

    navbarController.$inject = ['authenticationService', '$location'];

    function navbarController(authenticationService, $location) {
        var vm = this;
        vm.user = {
            isAuthorized: false,
            username: ""
        };

        function init() {
            var auth = authenticationService.authentication;
            vm.user.isAuthorized = auth.isAuth;
            vm.user.username = auth.username;
        };
    };

}(window.angular));