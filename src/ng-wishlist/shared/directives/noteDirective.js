(function (angular) {
    "use strict";

    angular.module("favListerApp")
           .directive("ngFavlisterPanel",
                      notePanel);

    function notePanel() {
        return {
            restrict: 'E',
            scope: {
                note: '=note',
                updateNote: '&',
                deleteNote: '&'
            },
            templateUrl: '/shared/templates/_notePanel.html'
        }
    };
}(window.angular));