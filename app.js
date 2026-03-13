const express = require('express');
const app = express();
//import podstron
const pageAbout = require('./pages/about');
const pageMain = require('./pages/main');
const pageArticle = require('./pages/article');

//lista podstron
app.use('/', pageMain);
app.use('/about', pageAbout);
app.use('/article', pageArticle); 

//aktywacja aplikacji 
app.listen(8080, function(){ 
    console.log(`Strona działa pod adresem: http://localhost:8080`);
});