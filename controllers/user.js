// module requirement
const path = require(`path`);

// @desc get room page
// @route GET '/room'
// @access private
exports.getRoomPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views/index.html'));
};