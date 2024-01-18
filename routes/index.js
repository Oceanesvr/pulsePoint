var express = require('express');
var router = express.Router();
/*const connection = require('../app');
var path = require('path');*/


router.get('/', (req, res) => {
  res.render('index', { title: 'PULSE POINT' });
  });
  

router.get('/donnees', (req,res) =>{
  res.render('donnees', {title: 'Importation des donnees'});
});

router.get ('/recapQuest', (req,res) =>{
  res.render('recapQuest', {title: 'Sélection des questions'});
});

router.get ('/synthese', (req,res) => {
  res.render ('synthese', {title: 'Synthèse des données'});
});

router.get ('/inscription', (req,res) =>{
  res.render ('inscription', {title:'Inscription'});
});

router.get ('/connexion', (req,res) =>{
  res.render ('connexion', {title: 'Connexion'});
});

router.get ('/listeSynthese', (req, res) =>{
  res.render ('listeSynthese', {title: 'Liste des synthèses'});
});

router.get ('/infosPersonnelles', (req ,res) =>{
  res.render ('infosPersonnelles', {title: 'Vos informations personnelles'});
});

router.get ('/motDePasse', (req,res) =>{
  res.render ('motDePasse', {title: 'Réinitialiser le mot de passe'});
});

router.get ('/suppression', (req, res) =>{
  res.render ('suppression', {title:'Suppression du compte'});
});

router.get ('/bandeau', (req, res) =>{
  res.render('bandeau', {title: ''});
});

router.get ('/bandeau2', (req, res) =>{
  res.render('bandeau2', {title:''});
});

/*
router.get('/utilisateurs', (req, res) => {
  connection.query('SELECT * FROM utilisateurs', (err, results) => {
    if (err) {
      console.error('Erreur lors de la requête MySQL : ' + err.stack);
      res.status(500).send('Erreur lors de la récupération des utilisateurs.');
      return;
    }

    res.json(results);
  });

});
*/



module.exports = router;


