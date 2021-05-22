/*
seedData.js seeds the data that was retrieved from the API in allProducts.js into the MongoDB db.
*/

const mongoose = require('mongoose');
const Item = require('../models/item');
const allProducts = require('./allProducts');

mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedData = async () => {
    for (let product of allProducts) {
        const item = new Item({
            title: product.title,
            price: product.price,
            asin: product.asin,
            image: product.asin,
            category: product.category,
            image: product.image,
            rating: {
                totalRatings: product.rating.totalRatings,
                score: product.rating.score
            },
            productDetails: {
                description: product.productDetails.description,
                brand: product.productDetails.brand
            }
        })

        await item.save();
    }
}

seedData();