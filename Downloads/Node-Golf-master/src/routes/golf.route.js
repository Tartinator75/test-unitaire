const express = require('express');
const router = express.Router();
const golf = require('../controllers/golf.controller');
const verifyToken = require('../helpers/verifyToken');

router.post('/golf', golf.create);
router.post("/golf/:id", verifyToken, golf.findOneAndUpdate);
router.get("/golf/:id", verifyToken, golf.findById);
router.get('/golfs', verifyToken, golf.findAll);
router.delete("/golf/:id", verifyToken, golf.findOneAndRemove);

module.exports = router;