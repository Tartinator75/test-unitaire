const express = require('express');
const router = express.Router();
const administrateur = require('../controllers/administrateur.controller');

//route de création d'un nouvel utilisateur
router.post('/administrateur/register', administrateur.create);

//router d'authantification administrateur
router.post('/administrateur/login', administrateur.login2);

module.exports = router;