(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("RegistrationController", registrationController);

    registrationController.$inject = ['userService', 'notificationService', '$location'];

    function registrationController(userService, notificationService, $location) {
        var vm = this;
        //vm.form = {};

        vm.user = {
            name: "",
            email: "",
            mobile: "",
            username: "",
            password: ""
        };

        vm.save = function (isValid) {
            if (isValid) {
                vm.dataLoading = true;

                userService
                    .registerUser(vm.user)
                    .$promise
                    .then(function (response) {
                        //success
                        notificationService.success('Registration successful', true);
                        $location.path('/login');
                    },
                    function (error) {
                        //error
                        notificationService.error('Unable to register user: ' + error.data.message);
                        vm.dataLoading = false;
                    });
            }
        };
    };

}(window.angular));