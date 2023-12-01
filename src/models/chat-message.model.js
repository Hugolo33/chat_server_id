const { model, Schema } = require('mongoose');

const ChatMessageSchema = new Schema({
    nombre: String,
    mensaje: String,

}, { versionKey: false, timestamps: true });

module.exports = model('message', ChatMessageSchema);