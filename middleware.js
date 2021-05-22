//isLoggedIn checks if user is authenticated
//If authenticated, users will be able to view pages that require an authenticated user
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl; //In the case where user is not logged in, after logging in
        //returnTo will redirect user to the intended URL rather than the homepage
        req.flash('error', 'Please sign in to view page!');
        return res.redirect('/login');
    }

    next();
}