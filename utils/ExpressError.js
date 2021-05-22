/*
ExpressError.js is a error handler class that will help with the errors when dealing with
Express in app.js
 */

class ExpressError extends Error {
    constructor(message, statusCode) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;