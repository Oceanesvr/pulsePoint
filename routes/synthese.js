var express = require ('express');
var router = express.Router();

router.get('/synthese', function(req,res, next){
    res.render('/synthese', {title: 'Synthèse de données'});
});

module.exports = router;
