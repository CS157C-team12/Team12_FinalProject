/*
catchAsync.js is an error handler that works with only async functions since they 
output different errors
*/

module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}