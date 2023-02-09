const bodyParser = require('body-parser');
const express = require('express');
const router = require('./controllers/routes');
const path = require('path');

// On recupere l'application express
const app = express();

// encode l'url
app.use(express.urlencoded({ extended: true }));

// parse pour le json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//on autorise le dossier public
app.use(express.static(__dirname + "/public"));

//On charge moteur EJS
app.set("view engine", "ejs");
app.set("views", "./views");

//on va ecouter routes.js
app.use('/', router);

app.listen(8765, () => {
    console.log('Express is running on port: ' + 8765);
});