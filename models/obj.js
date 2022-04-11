const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const objSchema = new Schema({
	text: { type: String, required: true }
});

module.exports = mongoose.model('Obj', objSchema);
