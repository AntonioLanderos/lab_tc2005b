const express = require('express');
const router = express.Router();


router.get('/pagina', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send('ESTA ES UNA PAGINA DE PRUEBA :)');
    response.end();  
});

router.get('/pregunta', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send('Describe el archivo package.json. : nos ayuda a hacer un seguimiento de todos los paquetes instalados en un proyecto determinado. Al crear un nuevo proyecto, es importante empezar por crear este archivo. Almacena información sobre un proyecto, como el nombre del proyecto, su versión, los scripts, las dependencias, etc.');
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

module.exports = router;