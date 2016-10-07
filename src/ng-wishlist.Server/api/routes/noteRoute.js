(function (noteRoute) {
    var noteController = require("../controllers/noteController");

    noteRoute.init = function (apiRouter) {

        apiRouter.route('/note/add')
            .post(noteController.addNote);

        apiRouter.route('/note/all')
            .get(noteController.getAllNotes);

        apiRouter.route('/note/update/:id')
            .put(noteController.updateNote);
    };

})(module.exports);