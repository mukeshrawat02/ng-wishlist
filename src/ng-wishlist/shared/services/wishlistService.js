(function () {
    "use strict";

    angular.module("common.services")
           .service("wishlistService", wishlistService);

    wishlistService.$inject = ['$resource', 'API_ENDPOINT'];

    function wishlistService($resource, API_ENDPOINT) {
        var NoteService = $resource(API_ENDPOINT + '/notes/:id', { id: "@id" }, {
            update: {
                method: 'PUT'
            }
        });

        function getAll() {
            return NoteService.get();
        }

        function get(_id) {
            return NoteService.get({ id: _id });
        }

        function create(note) {
            return NoteService.save(note);
        }

        function update(_id, note) {
            return NoteService.update({ id: _id }, note);
        }

        function remove(_id) {
            return NoteService.remove({ id: _id });
        }

        return {
            getNotes: getAll,
            getNote: get,
            updateNote: update,
            addNote: create,
            deleteNote: remove
        };
    };
}());