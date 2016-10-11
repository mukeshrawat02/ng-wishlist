(function () {
    "use strict";

    angular.module("common.services")
           .service("wishlistService", wishlistService);

    wishlistService.$inject = ['$resource', 'API_ENDPOINT'];

    function wishlistService($resource, API_ENDPOINT) {

        function getUserNotes() {
            return $resource(API_ENDPOINT + '/note/all').get();
        }

        return {
            getNotes: getUserNotes
        };
    };
}());