var express = require ('express');
var router = express.Router();

router.get('/inscription', function(req,res, next){
    res.render('/inscription', {title: 'Inscription'});
});

module.exports = router;
