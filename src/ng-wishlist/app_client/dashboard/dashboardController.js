(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("DashboardController", dashboardController);

    dashboardController.$inject = ['wishlistService', '$scope', '$mdDialog'];

    function dashboardController(wishlistService, $scope, $mdDialog) {
        var vm = this;

        vm.notes = [];
        vm.priorities = ["High", "Medium", "Low"];
       
        clearNoteObject();
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

        vm.updateNote = function (noteId, ev) {
            vm.heading = "Edit Item";
            vm.isUpdateRequest = true;
            loadNotePanel(noteId, ev);
        };

        vm.createNote = function (ev) {
            vm.heading = "Create Item";
            vm.isUpdateRequest = false;
            loadNotePanel(null, ev);
        };

        vm.deleteNote = function (noteId, ev) {
            showConfirm(ev).then(function () {
                console.log("deleted")
            }, function () {
                console.log("cancelled");
            });
        };

        function loadNotePanel(nodeId, ev) {
            if (nodeId) {

            }
            showNoteDiaglog(ev);
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
            });

            function DialogController($scope, $mdDialog) {
                $scope.closeDialog = function () {
                    $mdDialog.cancel();
                }
                $scope.saveNote = function (isValid) {
                    if (isValid) {
                        vm.notes.push(vm.note);
                        clearNoteObject();
                        $mdDialog.hide();
                    }
                };
            }
        };

        var showConfirm = function(ev) {
            var confirm = $mdDialog.confirm()
                  .title('Delete Note')
                  .textContent('Are you sure you want to delete this note?')
                  .ariaLabel('Delete Note')
                  .targetEvent(ev)
                  .ok('Yes')
                  .cancel('No');

            return $mdDialog.show(confirm);
        };

        function clearNoteObject() {
            vm.note = {
                title: "",
                detail: "",
                priority: ""
            };
        };
    };

}(window.angular));