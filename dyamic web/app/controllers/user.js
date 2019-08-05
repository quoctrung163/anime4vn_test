module.exports.home = (req, res, next) => {
    res.render('users/home');
    next();
};