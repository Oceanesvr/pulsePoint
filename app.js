var createError = require('erreurs-http') ;
var express = require('express') ;
var chemin = require('chemin') ;
var cookieParser = require('analyseur-cookie') ;
var lessMiddleware = require('moins-intergiciel') ;
var logger = require('morgan') ;


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var donneesRouter = require('./routes/donnees');
var recapQuestRouter = require ('./routes/recapQuest');
var syntheseRouter = require ('./routes/synthese');
var inscriptionRouter = require ('./routes/inscription');
var connexionRouter = require ('./routes/connexion');
var listeSyntheseRouter = require ('./routes/listeSynthese');
var infosPersonnellesRouter = require ('./routes/infosPersonnelles');
var motDePasseRouter = require ('./routes/motDePasse');
var suppressionRouter = require ('./routes/suppression');
var bandeauRouter = require ('./routes/bandeau');
var bandeau2Router = require ('./routes/bandeau2');

app.use(logger('dev')) ;
app.use(express.json()) ;
app.use(express.urlencoded({ étendu : false })) ;
app.use(cookieParser()) ;
app.use(lessMiddleware(chemin.join(__dirname, 'public'))) ;
app.use(express.static(path.join(__dirname, 'public'))) ;


app.use('/', indexRouter);
app.use('/donnees', donneesRouter);
app.use('/recapQuest',recapQuestRouter);
app.use ('/synthese', syntheseRouter);
app.use ('/inscription', inscriptionRouter);
app.use ('/connexion', connexionRouter);
app.use ('/listeSynthese', listeSyntheseRouter);
app.use ('/infosPersonnelles', infosPersonnellesRouter);
app.use ('/motDePasse', motDePasseRouter);
app.use ('/suppression', suppressionRouter);
app.use ('/bandeau', bandeauRouter);
app.use ('/bandeau2', bandeau2Router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

//Connexion à la base de données
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'apichatgpt'
});

connection.connect(err => {
  if (err) {
    console.error('Erreur de connexion à MySQL : ' + err.stack);
    return;
  }
  console.log('Connecté à MySQL avec l\'ID de connexion ' + connection.threadId);
});

// Assurez-vous que la connexion est fermée lorsque l'application se termine
process.on('SIGINT', () => {
  connection.end();
  process.exit();
});





module.exports = app;
