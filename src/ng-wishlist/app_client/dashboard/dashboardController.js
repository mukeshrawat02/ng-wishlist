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

        var showNoteDiaglog = function (ev) {
            $mdDialog.show({
                controller: DashboardController,
                templateUrl: '/shared/templates/_noteWindow.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false,
                fullscreen: false
            }).then(function (answer) {
                //Ok
            }, function () {
                //Cancel
            });
        };
    };

}(window.angular));