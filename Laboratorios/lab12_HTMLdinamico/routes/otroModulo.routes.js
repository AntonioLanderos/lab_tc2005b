const express = require('express');
const router = express.Router();


router.get('/pagina', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send('ESTA ES UNA PAGINA DE PRUEBA :)');
    response.end();  
});

router.get('/pregunta', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send('¿Qué otros templating engines existen para node? \n Pug, Handlebars.js, Mustache, Nunjucks, Hogan.js, Twig.js, Dust.js');
    response.end();  
});

router.get('/test_json', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.json({code:200, msg:"Ok GET"});
    response.end();  
});

router.post('/test_json', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.json({code:200, msg:"Ok POST"});
    response.end();  
});

router.get('/tienda', (request, response, next) => {
    response.render('tienda')
});

module.exports = router;