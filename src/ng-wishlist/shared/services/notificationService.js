(function () {
    'use strict';

    angular.module("common.services")
           .factory('notificationService', notificationService);

    notificationService.$inject = ['flashService', 'toastr'];

    function notificationService(flashService, toastr) {
        return {
            success: function (text, keepAfterLocationChange) {
                if (keepAfterLocationChange) {
                    flashService.success(text, true);
                }
                else {
                    toastr.success(text, "Success");
                }
            },
            error: function (text, keepAfterLocationChange) {
                if (keepAfterLocationChange) {
                    flashService.error(text, true);
                }
                else {
                    toastr.error(text, "Error");
                }
            }
        };
    };

})();