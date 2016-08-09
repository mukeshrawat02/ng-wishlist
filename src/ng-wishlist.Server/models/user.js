﻿// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: Number,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    dob: Date,
    created_at: { type: Date, default: Date.now() }
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);