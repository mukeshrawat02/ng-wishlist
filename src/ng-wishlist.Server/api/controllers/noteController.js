(function (noteController) {

    var Note = require('../../models').Note;

    // GET /api/note/add
    noteController.addNote = function (req, res) {
        var note = new Note();
        note.title = req.body.title;
        note.detail = req.body.detail;
        note.isMarkCompleted = false;
        note.isMarkDeleted = false;
        note.created_by = req.decoded._id;
        note.priority = req.body.priority;
        console.log(req.body);

        // Save the note and check for errors
        note.save(function (err) {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            }

            res.json({
                success: true,
                message: 'Note has been added!',
                data: note
            });
        });
    };

    // GET /api/note/all
    noteController.getAllNotes = function (req, res) {
        Note.find({ 'created_by': req.decoded._id }, function (err, notes) {
            if (err) {
                res.status(500).send(err);
            }
            res.json({
                success: true,
                data: notes
            });
        });
    };

    // PUT /api/note/update/:id/
    noteController.updateNote = function (req, res) {
        Note.findById({ _id: req.params.id }, function (err, note) {
            if (err) {
                res.status(500).send(err);
            }
            // Update only data that exists in request
            if (req.body.title) {
                note.title = req.body.title;
            }

            user.updated_at = Date.now();

            user.save(function (err) {
                if (err) {
                    res.status(500).send(err);
                }

                res.json({
                    success: true,
                    message: 'Note updated.',
                    data: note
                });
            });
        });
    };
})(module.exports);