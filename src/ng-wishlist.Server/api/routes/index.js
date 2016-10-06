(function (apiRoutes) {

    var userRoute = require("./userRoute");
    var noteRoute = require("./noteRoute");

    apiRoutes.init = function (routes) {
        userRoute.init(routes);
        noteRoute.init(routes);
    };

})(module.exports);