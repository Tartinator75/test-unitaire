const express = require('express');
const router = express.Router();

const golfRouter = require('./golf.route');
const managerRouter = require('./manager.route');
const administrateurRouter = require('./administrateur.route');

router.use(golfRouter);
router.use(managerRouter);
router.use(administrateurRouter);

module.exports = router;