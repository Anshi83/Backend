const { Schema, model } = require('../connection'); //{}for few componets from mongoose
const mySchema = new Schema({
    productname: String,
    brand: {
        type: String,
        unique: true,
        required: true
    },
    price: { type: String, required: true },
    //image: { type: String },
    createdAT: { type: Date, default: Date.now }
});
module.exports = model('products ', mySchema);