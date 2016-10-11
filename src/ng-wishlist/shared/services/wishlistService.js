(function () {
    "use strict";

    angular.module("common.services")
           .service("wishlistService", wishlistService);

    wishlistService.$inject = ['$resource', 'API_ENDPOINT'];

    function wishlistService($resource, API_ENDPOINT) {

        function getAll() {
            return $resource(API_ENDPOINT + '/note/all').get();
        }

        function get(_id) {
            return $resource(API_ENDPOINT + '/note/get/:id', { id: _id });
        }

        function update(_id) {
            return $resource(API_ENDPOINT + '/note/update/:id', { id: _id }, {
                update: {
                    method: 'PUT'
                }
            });
        }

        return {
            getNotes: getAll,
            getNote: get,
            updateNote: update,

        };
    };
}());