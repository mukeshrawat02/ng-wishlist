(function (noteController) {

    var Note = require('../../models').Note;

    // POST /api/notes
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
                res.status(500).send(err);
            }

            res.json({
                success: true,
                message: 'Note has been added!',
                data: note
            });
        });
    };

    // GET /api/notes
    noteController.getAllNotes = function (req, res) {
        Note.find({ 'created_by': req.decoded._id }).sort({ created_by: -1 }).exec(function (err, notes) {
            if (err) {
                res.status(500).send(err);
            }
            res.json({
                success: true,
                data: notes
            });
        });
    };

    // GET /api/note/:id
    noteController.getNote = function (req, res) {
        Note.findById({ _id: req.params.id }, function (err, note) {
            if (err) {
                res.status(500).send(err);
            }

            res.json({
                success: true,
                data: note
            });
        });
    };

    // PUT /api/note/:id/
    noteController.updateNote = function (req, res) {
        Note.findById({ _id: req.params.id }, function (err, note) {
            if (err) {
                res.status(500).send(err);
            }
            //console.log(req.body);
            // Update only data that exists in request
            if (req.body.title) {
                note.title = req.body.title;
            }
            if (req.body.detail) {
                note.detail = req.body.detail;
            }
            if (req.body.priority) {
                note.priority = req.body.priority;
            }
            if (req.body.isMarkCompleted) {
                note.isMarkCompleted = req.body.isMarkCompleted;
            }

            note.updated_at = Date.now();

            note.save(function (err) {
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