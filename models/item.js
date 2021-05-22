/*
item.js: defines the items' schema
*/

//Connecting MongoDB to JS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: String,
    price: Number,
    asin: String,
    image: String,
    category: String,
    rating: {
        totalRatings: Number,
        score: String
    },
    productDetails: {
        description: String,
        weight: String,
        brand: String
    }
})

module.exports = mongoose.model('Item', ItemSchema);
