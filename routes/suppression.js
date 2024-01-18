var express = require ('express');
var router = express.Router();

router.get('/suppression', function(req,res, next){
    res.render('suppression', {title: 'Suppression du compte'});
});

module.exports = router;
