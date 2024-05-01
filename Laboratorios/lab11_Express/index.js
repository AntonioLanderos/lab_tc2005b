const http    = require('http');
const express = require('express');
const app     = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send(" / para indice \n /otroModulo/tienda para ir a la tienda en linea \n /otroModulo/test_json \n /otroModulo/pagina  \n /otroModulo/pregunta Para la pregunta del laboratorio \n /formulario/login para formulario");
    response.end(); 
});

const rutasFormulario = require('./routes/formulario.routes');
app.use('/formulario', rutasFormulario);

const rutasOtroModulo = require('./routes/otroModulo.routes');
app.use('/otroModulo', rutasOtroModulo);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.status(404);
    response.send('¡Page Not Found!'); //Manda la respuesta
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);
