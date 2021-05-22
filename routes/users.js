const express = require('express');
const router = express.Router();
const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const Cart = require('../models/cart');

createCart = async (req) => {
    const cart = new Cart({
        user: req
    })

    await cart.save();
}

router.get('/register', (req, res) => {
    res.render('users/register');
})

//isAuthenticated (comes from passport) is automatically added to req
router.post('/register', catchAsync(async (req, res, next) => {
    try {
        const { firstname, lastname, email, address, state, zip, username, password } = req.body;
        const user = new User({
            name: {
                firstName: firstname,
                lastName: lastname
            },
            address: {
                street: address,
                staate: state,
                zip: zip
            },
            email: email,
            username: username
        });

        const registeredUser = await User.register(user, password);

        //Passport's .login function will automatically login the new registered user
        req.login(registeredUser, err => {
            if (err) {
                return next(err);
            } else {
                createCart(req.user._id);
                req.flash('success', 'Welcome!');
                res.redirect('/');
            }
        });

    } catch (e) { //In the case where there is already a user with the same info, catch error
        req.flash('error', e.message);
        res.redirect('register');
    }
}))

router.get('/login', (req, res) => {
    res.render('users/login');
})

//Passport has a middleware name authenticate that allows us to authenticate 
//the login through the local route. Additionally, we can pass in objects like
//failureFlash which will flash if an error has occurred and a redirect method
router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    req.flash('success', 'Welcome back!');
    const redirectUrl = req.session.returnTo || '/';
    delete req.session.returnTo; //Emptying the session URL
    res.redirect(redirectUrl);
})

//logout is a default method that comes with req
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', "Logged out, goodbye!");
    res.redirect('/login');
})

module.exports = router;