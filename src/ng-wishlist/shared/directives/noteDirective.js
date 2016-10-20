(function (angular) {
    "use strict";

    angular.module("favListerApp")
           .directive("ngFavlisterPanel",
                      wishlistPanel);

    function wishlistPanel() {
        return {
            restrict: 'E',
            scope: {
                wishItem: '=',
                updateItem: '&',
                deleteItem: '&'
            },
            templateUrl: '/shared/templates/_wishlistPanel.html'
        }
    };
}(window.angular));