const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
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
    response.send(" / para indice \n /tienda para ir a la tienda en linea \n /login para formulario");
    response.end(); 
});

app.get('/test_json', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.json({code:200, msg:"Ok GET"});
    response.end();  
});

app.post('/test_json', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.json({code:200, msg:"Ok POST"});
    response.end();  
});

app.get('/tienda', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');    
    response.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 6</title>
        <link rel="stylesheet" href="styles1.css">
    </head>
    <body>
        <h1>Tienda Online</h1>
    
        <div class="product">
            <h2>Balón</h2>
            <label for="quantity1">Cantidad:</label>
            <input type="number" id="quantity1" min="0" value="0">
            <button onclick="calculateTotal()">Calcular Total</button>
            <p>Precio por unidad: $750</p>
        </div>
    
        <div class="product">
            <h2>Camiseta Warriors</h2>
            <label for="quantity2">Cantidad:</label>
            <input type="number" id="quantity2" min="0" value="0">
            <button onclick="calculateTotal()">Calcular Total</button>
            <p>Precio por unidad: $1500</p>
        </div>
    
        <div class="product">
            <h2>Short Lakers</h2>
            <label for="quantity3">Cantidad:</label>
            <input type="number" id="quantity3" min="0" value="0">
            <button onclick="calculateTotal()">Calcular Total</button>
            <p>Precio por unidad: $1100</p>
        </div>
    
        <h2>Total a Pagar:</h2>
        <p id="totalAmount">$0</p>
    
        <script src="script1.js"></script>
    </body>
    </html>
    `);
    response.end(); 
});

const rutasFormulario = require('./routes/formulario.routes');
app.use('/formulario', rutasFormulario);

/*app.get('/login', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    const html = fs.readFileSync(path.resolve(__dirname, './form.html'), 'utf8')
    response.write(html);
    response.end();  
});

app.post('/login', (request, response, next) => {
    const psw = (request.body.psw);
    console.log(psw);
    const verify = request.body.verify
    console.log(verify);
    
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write('{code:200, msg:"Ok POST"}');
    response.end();
}); */

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.status(404);
    response.send('¡Page Not Found!'); //Manda la respuesta
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);