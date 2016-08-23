/**
 * Created by Mukesh on 06/03/2016.
 */
(function () {
    "use strict";

    angular.module("common.services")
           .service("userService",
                    userService);

    function userService() {
        this.registerUser = function (user) {
            alert(user.username);
        };
    };
}());