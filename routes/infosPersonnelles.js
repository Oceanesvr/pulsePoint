var express = require ('express');
var router = express.Router();

router.get('/infosPersonnelles', function(req,res, next){
    res.render('infosPersonnelles', {title: 'Vos informations personnelles'});
});

module.exports = router;
