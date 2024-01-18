var express = require ('express');
var router = express.Router();

router.get('/bandeau2', function(req,res, next){
    res.render('bandeau2', {title: ''});
});

module.exports = router;
