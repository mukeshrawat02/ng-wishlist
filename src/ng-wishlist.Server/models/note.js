var Note = function (mongoose) {

    // Define our note schema
    var NoteSchema = new mongoose.Schema({
        title: { type: String, required: true },
        detail: String,
        isMarkCompleted: Boolean,
        isMarkDeleted: Boolean,
        completed_at: Date,
        created_at: { type: Date, default: Date.now() },
        created_by: String,
        last_updated: { type: Date, default: Date.now() }
    });

    // Export the Mongoose model
    return mongoose.model('Note', NoteSchema);
};

module.exports = Note;