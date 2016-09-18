/**
 * Created by Mukesh on 06/03/2016.
 */
(function () {
    "use strict";

    angular.module("common.services",
                   [
                       'ngResource',
                       'toastr'
                   ])
           .constant('API_ENDPOINT', 'http://localhost:8000/api');
}());