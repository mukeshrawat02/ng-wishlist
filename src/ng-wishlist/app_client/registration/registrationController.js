/**
 * Created by Mukesh on 06/03/2016.
 */
(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("RegistrationController",
                        registrationController);

    function registrationController() {
        var self = this;
        alert(self.username);
        self.save = function() {

        };
    };

}(window.angular));