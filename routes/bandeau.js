var express = require ('express');
var router = express.Router();

router.get('/bandeau', function(req,res, next){
    res.render('bandeau', {title: ''});
});

module.exports = router;
