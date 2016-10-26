(function (noteRoute) {
    var noteController = require("../controllers/noteController");

    noteRoute.init = function (apiRouter) {
        apiRouter.route('/notes')
            .post(noteController.addNote)
            .get(noteController.getAllNotes);

        apiRouter.route('/notes/:id')
            .put(noteController.updateNote)
            .get(noteController.getNote)
            .delete(noteController.deleteNote);
    };

})(module.exports);