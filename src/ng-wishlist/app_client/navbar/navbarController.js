(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("NavbarController", navbarController);

    navbarController.$inject = ['userService', '$location'];

    function navbarController(userService, $location) {
        var vm = this;
        vm.user = {
            isAuthorized: true,
            username: "World"
        };


    };

}(window.angular));