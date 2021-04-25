// module requirement
const path = require(`path`);

// @desc get auth page
// @route GET '/'
// @access private
exports.getAuthPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views/auth.html'));
};