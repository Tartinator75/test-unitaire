const manager = require('../controllers/manager.controller');
const express = require('express');
const router = express.Router();
const verifyToken = require('../helpers/verifyToken');

router.post('/manager', manager.create);
router.delete("/manager/:id", verifyToken, manager.findOneAndRemove);
router.post("/manager/:id", verifyToken, manager.findOneAndUpdate);
router.get("/manager/:id", verifyToken, manager.findById);
router.get('/managers', verifyToken, manager.findAll);

module.exports = router;