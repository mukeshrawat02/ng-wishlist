(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("NavbarController", navbarController);

    navbarController.$inject = ['authenticationService', '$location', '$scope', '$state'];

    function navbarController(authenticationService, $location, $scope, $state) {
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
            }
            else {
                vm.user = {
                    isAuthenticated: false,
                    username: ""
                };
            }
        };

        vm.isActive = function (route) {
            return route === $location.path();
        };

        vm.getLandingUrl = function () {
            var href = 'home';
            if (vm.user.isAuthenticated)
                href = 'dashboard'
            
            return $state.href(href, null);
        };

        vm.logout = function () {
            authenticationService.logout();
        };

        $scope.$on('authorized', function () {
            loadCurrentUser();
        });

        $scope.$on('unauthorized', function () {
            loadCurrentUser();
        });
    };

}(window.angular));