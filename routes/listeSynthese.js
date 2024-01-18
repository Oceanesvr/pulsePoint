var express = require ('express');
var router = express.Router();

router.get('/listeSynthese', function(req,res, next){
    res.render('/listeSynthese', {title: 'Liste des synthèses'});
});

module.exports = router;
