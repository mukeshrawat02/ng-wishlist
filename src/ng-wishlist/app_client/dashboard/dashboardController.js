(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("DashboardController", dashboardController);

    dashboardController.$inject = ['wishlistService'];

    function dashboardController(wishlistService) {
        var vm = this;
        vm.notes = [];

        loadUserNotes();

        function loadUserNotes() {
            var notes = wishlistService.getNotes();
            if (notes) {
                notes
                  .$promise
                  .then(function (response) {
                      vm.notes = response.data;
                  });
            }
        };

        vm.updateNote = function (noteId) {
            loadNotePanel(noteId);
        };

        vm.createNote = function () {
            loadNotePanel(null);
        };

        vm.deleteNote = function (noteId) {
            console.log(noteId);
        };

        function loadNotePanel(nodeId) {
            if (nodeId) {

            }
            else {

            }
        }
    };

}(window.angular));