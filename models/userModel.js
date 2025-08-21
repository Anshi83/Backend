const { Schema, model } = require('../connection'); //{}for few componets from mongoose
const mySchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: { type: String, required: true },
    city: { type: String, default: 'unknown' },
    createdAT: { type: Date, default: Date.now }
});
module.exports = model('users ', mySchema);