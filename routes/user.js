// module requirement
const express = require('express');
const route = express.Router();

// controllers files
const { getRoomPage } = require(`../controllers/user`);

// @desc get room page
// @route GET '/room'
// @access private
route.route(`/room`)
    .get(getRoomPage);

module.exports = route;