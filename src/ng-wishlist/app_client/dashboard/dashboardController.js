(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("DashboardController", dashboardController);

    dashboardController.$inject = ['wishlistService', '$scope', '$mdDialog'];

    function dashboardController(wishlistService, $scope, $mdDialog) {
        var vm = this;

        vm.wishlist = [];
       
        vm.priorities = ["High", "Medium", "Low"];

        vm.create = function (ev) {
            vm.heading = "Create Item";
            vm.isUpdateRequest = false;
            clearNoteObject();
            loadNotePanel(null, ev);
        };

        vm.update = function (id, ev) {
            vm.heading = "Edit Item";
            vm.isUpdateRequest = true;
            loadNotePanel(id, ev);
        };

        vm.delete = function (id, ev) {
            showConfirm(ev).then(function () {
                var deletedNote = wishlistService.deleteNote(id);
                if (deletedNote) {
                    deletedNote
                      .$promise
                      .then(function () {
                          loadUserWishlist();
                      }, function () {
                          apiError();
                      });
                }
            }, function () {
                console.log("cancelled");
            });
        };

        clearNoteObject();
        loadUserWishlist();

        function loadUserWishlist() {
            var notes = wishlistService.getNotes();
            if (notes) {
                notes
                  .$promise
                  .then(function (response) {
                      vm.wishlist = response.data;
                  }, function () {
                      apiError();
                  });
            }
        };

        function loadNotePanel(id, ev) {
            if (id) {
                var selectedNote = wishlistService.getNote(id);
                if (selectedNote) {
                    selectedNote
                      .$promise
                      .then(function (response) {
                          vm.note = response.data;
                          showNoteDiaglog(ev);
                      }, function () {
                          apiError();
                      });
                }
            }
            else
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
                        if (vm.note._id)
                        {
                            //update
                            var updatedNote = wishlistService.updateNote(vm.note._id, vm.note);
                            if (updatedNote) {
                                updatedNote
                                  .$promise
                                  .then(function () {
                                      loadUserWishlist();
                                  }, function () {
                                      apiError();
                                  });
                            }
                        }
                        else
                        {
                            //create
                            var addedNote = wishlistService.addNote(vm.note);
                            if (addedNote) {
                                addedNote
                                  .$promise
                                  .then(function () {
                                      loadUserWishlist();
                                  }, function () {
                                      apiError();
                                  });
                            }
                        }
                        $mdDialog.hide();
                    }
                };
            }
        };

        var showConfirm = function (ev) {
            var confirm = $mdDialog.confirm()
                  .title('Delete Note')
                  .textContent('Are you sure you want to delete this note? \nThis cannot be undone.')
                  .ariaLabel('Delete Note')
                  .targetEvent(ev)
                  .ok('Yes')
                  .cancel('No');

            return $mdDialog.show(confirm);
        };

        var apiError = function () {
            $mdDialog.show(
              $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('API Error')
                .textContent('An error occurred. Something went wrong, we are working on fixing it.')
                .ariaLabel('Error Alert Box')
                .ok('Ok')
                .openFrom('#left')
                .closeTo(angular.element(document.querySelector('#right')))
            );
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