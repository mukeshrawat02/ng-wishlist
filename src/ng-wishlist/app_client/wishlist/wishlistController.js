(function (angular) {
    "using strict";

    angular.module("favListerApp")
           .controller("WishlistController", wishlistController);

    wishlistController.$inject = ['wishlistService'];

    function wishlistController(wishlistService) {
        var vm = this;

       
    };

}(window.angular));