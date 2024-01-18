var express = require ('express');
var router = express.Router();

router.get('/motDePasse', function(req,res, next){
    res.render('motDePasse', {title: 'Réinitialiser le mot de passe'});
});

module.exports = router;
