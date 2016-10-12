(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("NoteController", noteController);

    noteController.$inject = ['wishlistService'];

    function noteController(wishlistService) {
        var vm = this;
        vm.note = {
            title: "",
            detail: "",
            isMarkCompleted: false,
            isDeleted: false
        };

        vm.createNote = function (isValid) {
            if (isValid) {

            }
        };

        vm.deleteNote = function () {
           
        };

        
    };

}(window.angular));