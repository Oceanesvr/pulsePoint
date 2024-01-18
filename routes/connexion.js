var express = require ('express');
var router = express.Router();

router.get('/connexion', function(req,res, next){
    res.render('/connexion', {title: 'Connexion'});
});



module.exports = router;
