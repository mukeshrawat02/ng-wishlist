(function (angular) {
    "use strict";

    angular.module("favListerApp")
           .directive("ngFavListerPanel",
                      notePanel);

    function notePanel() {
        return {
            restrict: 'E',
            scope: {
                note: '=note',
                panelType: '@type'
            },
            templateUrl: '/shared/templates/_notePanel.html'
        }
    };
}(window.angular));