/*
cart.js: defines the cart schema
*/

//Connecting MongoDB to JS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    carts: [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }]
})

module.exports = mongoose.model('Cart', CartSchema);
