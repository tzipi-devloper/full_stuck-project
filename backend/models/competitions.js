const mongoose = require('mongoose');
const competitionSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model('Competition', competitionSchema);
