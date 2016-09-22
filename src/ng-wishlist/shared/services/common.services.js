(function () {
    "use strict";

    var service = angular.module("common.services",
                   [
                       'ngResource',
                       'toastr'
                   ])
                  .constant('API_ENDPOINT', 'http://localhost:8000/api');

    service.config(function (toastrConfig) {
        angular.extend(toastrConfig, {
            autoDismiss: true,
            containerId: 'toast-container',
            maxOpened: 0,
            newestOnTop: true,
            positionClass: 'toast-top-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body'
        });
    });
}());