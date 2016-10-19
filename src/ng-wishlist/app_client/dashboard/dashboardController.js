(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("DashboardController", dashboardController);

    dashboardController.$inject = ['wishlistService', '$scope', '$mdDialog'];

    function dashboardController(wishlistService, $scope, $mdDialog) {
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

        vm.createNote = function (ev) {
            vm.heading = "Create Item";
            showNoteDiaglog(ev);
        };

        vm.deleteNote = function (noteId) {
            console.log(noteId);
        };

        

        function loadNotePanel(nodeId) {
            if (nodeId) {

            }
            else {
                showNoteDiaglog(ev);
            }
        }

        var showNoteDiaglog = function (ev) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                scope: $scope,
                preserveScope: true,
                parent: parentEl,
                templateUrl: '/shared/templates/_noteWindow.html',
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: true,
                controller: DialogController
            }).then(function (answer) {
                console.log(answer);
            }, function () {

            });

            function DialogController($scope, $mdDialog) {
                
                $scope.closeDialog = function () {
                    $mdDialog.cancel();
                }
                $scope.saveNote = function (isValid) {
                    if (isValid) {

                    }
                };
            }
        };
        
    };

}(window.angular));