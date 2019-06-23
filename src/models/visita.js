const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitaSchema = new Schema({
    run : String,
    descripcion : String,
    valor : Number,
    fecha : Date,
    hora : String
});

module.exports = mongoose.model('visitas',visitaSchema);