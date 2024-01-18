// Créez ceci dans routes/donnees.js
var express = require('express');
var router = express.Router();

/* GET page donnees. */
router.get('/donnees', function(req, res, next) {
  res.render('donnees', { title: 'Import du fichier Excel' });
});

module.exports = router;

