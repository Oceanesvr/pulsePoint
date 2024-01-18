var express = require ('express');
var router = express.Router();

router.get('/recapQuest', function(req,res, next){
    res.render('/recapQuest', {title: 'Sélection des questions'});
});

module.exports = router;
