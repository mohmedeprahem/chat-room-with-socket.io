// module requirement
const express = require('express');
const route = express.Router();

// controllers files
const { getAuthPage } = require(`../controllers/auth`);

// @desc get room page
// @route GET '/room'
// @access private
route.route(`/`)
    .get(getAuthPage);

module.exports = route;