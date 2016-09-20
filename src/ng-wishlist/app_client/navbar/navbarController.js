(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("NavbarController", navbarController);

    navbarController.$inject = ['authenticationService', '$location', '$scope'];

    function navbarController(authenticationService, $location, $scope) {
        var vm = this;
        vm.user = {
            isAuthenticated: false,
            username: ""
        };

        onLoad();

        function onLoad() {
            //console.log("inside onload");
            //console.log(authenticationService.user.isAuthenticated);
            vm.user.isAuthenticated = authenticationService.user.isAuthenticated;
            vm.user.username = authenticationService.user.username;
        };

        vm.isActive = function (route) {
            return route === $location.path();
        };

        $scope.$on('authorized', function () {
            vm.user.isAuthenticated = authenticationService.user.isAuthenticated;
            vm.user.username = authenticationService.user.username;
        });
    };

}(window.angular));