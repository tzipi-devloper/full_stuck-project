const mongoose = require('mongoose');

const competitionSchema = new mongoose.Schema({
    userId: Number,
    category: String,
    score: Number,
    email: String,
    file: String,
});

module.exports = mongoose.model('Competition', competitionSchema);
