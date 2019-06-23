const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    run : String,
    description: String,
    valor : Number
});


module.exports = mongoose.model('tasks',TaskSchema);