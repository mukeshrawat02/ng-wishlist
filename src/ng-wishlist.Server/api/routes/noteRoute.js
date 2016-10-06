(function (noteRoute) {
    var noteController = require("../controllers/noteController");

    noteRoute.init = function (apiRouter) {

        apiRouter.route('/note/add')
            .post(noteController.addNote);
    };

})(module.exports);