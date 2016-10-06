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
       
        console.log(req.body);
        res.json({
                success: true,
                message: 'Note has been added!',
                data: note
        });

        // Save the note and check for errors
        //note.save(function (err) {
        //    if (err) {
        //        console.log(err);
        //        res.status(500).send(err);
        //    }

        //    res.json({
        //        success: true,
        //        message: 'Note has been added!',
        //        data: note
        //    });
        //});
    };

})(module.exports);