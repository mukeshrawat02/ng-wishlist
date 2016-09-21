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

        loadCurrentUser();

        function loadCurrentUser() {
            var user = authenticationService.currentUser();
            if (user) {
                user
                  .$promise
                  .then(function (response) {
                      vm.user.isAuthenticated = true;
                      vm.user.username = response.data.username;
                  });
            };
        }

        vm.isActive = function (route) {
            return route === $location.path();
        };

        $scope.$on('authorized', function () {
            loadCurrentUser();
        });
    };

}(window.angular));