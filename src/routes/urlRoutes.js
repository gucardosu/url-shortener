const express = require('express');
const router = express.Router();
const urlController = require('../controllers/UrlController');

//Rota para encurtar
router.post('/shorten', urlController.shortenUrl);

//Rota para redirecionar 
router.get('/:code', urlController.redirectUrl);

module.exports = router;