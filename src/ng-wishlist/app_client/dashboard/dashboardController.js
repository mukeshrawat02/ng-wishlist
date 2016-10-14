(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("DashboardController", dashboardController);

    dashboardController.$inject = ['wishlistService'];

    function dashboardController(wishlistService) {
        var vm = this;

        vm.notes = [];
        vm.priorities = ["High", "Medium", "Low"];

        vm.note = {
            title: "",
            detail: "",
            priority: ""
        };
        
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
            vm.heading = "Edit Item";
            loadNotePanel(noteId);
        };

        vm.createNote = function () {
            vm.heading = "Create Item";
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