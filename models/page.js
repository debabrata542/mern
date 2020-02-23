const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Page = mongoose.model('page', PageSchema);
