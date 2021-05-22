const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Item = require('./models/item');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const Cart = require('./models/cart');
const { isLoggedIn } = require('./middleware');

const usersRoutes = require('./routes/users');

mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true })); //parses data inputted by users
app.use(methodOverride('_method')); //allows us to use PUT, PATCH, and more for forms/user input or updates

app.use(express.static(__dirname + '/public'));

//Setting up session configuration, including its time frame
const sessionConfig = {
    secret: 'tempsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + (1000 * 60 * 60 * 24 * 7),
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

//Storing and unstoring the user in the session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user; //Access to current user
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use('/', usersRoutes);

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/purchase', isLoggedIn, catchAsync(async (req, res) => {
    const customerID = req.user._id; //gets current user's database ID
    const customerCart = await Cart.findOneAndUpdate({ user: customerID }, { $set: { carts: [] } });

    await customerCart.save();
    req.flash('success', 'Items have been purchased');
    res.redirect('/');
}))

app.post('/products/:id', isLoggedIn, catchAsync(async (req, res) => {
    const productId = req.params.id;
    const customerID = req.user._id; //gets current user's database ID

    //console.log(req.originalUrl); //TESTER: Prints out the linked that was just clicked on
    //console.log(req.params.id); //TESTER: Prints out the product ID in the URL

    const cart = await Cart.findOne({ user: customerID });
    //console.log(currentProduct);

    const addProduct = await Item.findById(productId);

    cart.carts.push(addProduct);
    await cart.save();

    req.flash('success', 'Added to cart');
    res.redirect('/');
}))

app.get('/cart', isLoggedIn, catchAsync(async (req, res) => {
    const customerID = req.user._id; //gets current user's database ID
    const customerCart = await Cart.findOne({ user: customerID }).populate('carts');
    const individualItems = customerCart.carts;
    let totalPrice = 0;

    res.render('cart', { individualItems, totalPrice });
}))

app.get('/productsHomeDecor', isLoggedIn, catchAsync(async (req, res) => {
    const products = await Item.find({ category: "Home Decor" });
    res.render('showHomeDecor', { products });
}))

app.get('/productsClothes', isLoggedIn, catchAsync(async (req, res) => {
    const products = await Item.find({ category: "Clothes" });
    res.render('showClothes', { products });
}))

app.get('/productsTechnology', isLoggedIn, catchAsync(async (req, res) => {
    const products = await Item.find({ category: "Technology" });
    res.render('showTechnology', { products });
}))

app.get('/productsFood', isLoggedIn, catchAsync(async (req, res) => {
    const products = await Item.find({ category: "Food" });
    res.render('showFood', { products });
}))

app.get('/productsPetSupplies', isLoggedIn, catchAsync(async (req, res) => {
    const products = await Item.find({ category: "Pet Supplies" });
    res.render('showPetSupplies', { products });
}))

app.get('/productsBeauty', isLoggedIn, catchAsync(async (req, res) => {
    const products = await Item.find({ category: "Beauty & Personal Care" });
    //req.flash('success', 'Cannot find product');
    res.render('showBeauty', { products });
}))

app.get('/products/:id', isLoggedIn, catchAsync(async (req, res) => {
    const products = await Item.findById(req.params.id);

    if (!products) {
        req.flash('error', 'Cannot find product');
        return res.redirect('/');
    }

    const productsName = products.category;
    let temp = "";

    if (productsName === "Beauty & Personal Care") {
        temp = "Beauty";
    } else if (productsName === "Pet Supplies") {
        temp = "PetSupplies";
    } else if (productsName === "Food") {
        temp = "Food";
    } else if (productsName === "Technology") {
        temp = "Technology";
    } else if (productsName === "Clothes") {
        temp = "Clothes";
    } else if (productsName === "Home Decor") {
        temp = "HomeDecor";
    }

    res.render('showProducts', { products, temp });
}))

//If none of the links the user types in are valid
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Error has occurred';
    res.status(statusCode).render('Error', { err });
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});