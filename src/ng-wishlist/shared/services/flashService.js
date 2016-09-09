(function () {
    'use strict';

    angular.module("common.services")
           .factory('flashService', flashService);

    flashService.$inject = ['$rootScope', '$timeout'];

    function flashService($rootScope, $timeout) {
        var service = {};

        service.success = success;
        service.error = error;
        service.clear = clear;

        initService();

        return service;

        function initService() {
            $rootScope.$on('$locationChangeStart', function () {
                clearFlashMessage();
            });

            function clearFlashMessage() {
                var flash = $rootScope.flash;
                if (flash) {
                    if (!flash.keepAfterLocationChange) {
                        delete $rootScope.flash;
                    } else {
                        // only keep for a single location change
                        flash.keepAfterLocationChange = false;
                    }
                }
            }
        }

        function success(message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: 'success',
                keepAfterLocationChange: keepAfterLocationChange
            };

            $timeout(function () {
                service.clear();
            }, 3000);
        }

        function error(message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: 'error',
                keepAfterLocationChange: keepAfterLocationChange
            };

            $timeout(function () {
                service.clear();
            }, 3000);
        }

        function clear() {
            delete $rootScope.flash;
        }
    }

})();