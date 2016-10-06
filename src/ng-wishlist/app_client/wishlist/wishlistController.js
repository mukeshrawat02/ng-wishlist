(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("WishlistController", wishlistController);

    wishlistController.$inject = ['wishlistService'];

    function wishlistController(wishlistService) {
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