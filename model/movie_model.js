const mongoose = require('mongoose');
const db = require('../config/db');
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "----"
    },

    movieCategories: {
        type: String,
        default: "----"
    },
    // isan stands for The International Standard Audiovisual Number .

    isan: {
        type: Number,
    },
    director: {
        type: String,
        default: "----"
    }
});
const moviemodel = db.model('movies', movieSchema);
module.exports = moviemodel;