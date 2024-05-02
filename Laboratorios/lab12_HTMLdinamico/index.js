const http    = require('http');
const express = require('express');
const path    = require('path');
const app     = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("index");
    response.end(); 
});

app.get('/test_ejs', (request, response, next) => {
    let frases = []
    frases.push("Frase 1");
    frases.push("Frase 2");
    frases.push("Frase 3");
    frases.push("Frase 4");
    frases.push("Frase 5");

    response.render('index',{
        frases: frases
    }); 
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
