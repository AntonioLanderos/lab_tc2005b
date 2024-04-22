const http = require('http');
const path = require('path');
const fs   = require('fs');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    
    switch(request.url){
        case "/index":
            response.setHeader('Content-Type', 'text/plain');
            response.write(" /index para indice \n /tienda para ir a la tienda en linea \n /login para formulario");
            response.end();   
            break;
        case "/tienda":
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
            break;
        case "/login":
            if(request.method == "GET"){
                response.setHeader('Content-Type', 'text/html');
                const html = fs.readFileSync(path.resolve(__dirname, './form.html'), 'utf8')
                response.write(html);
                response.end();  
            }else if(request.method == "POST"){
                let body = [];
                request
                .on('data', chunk => {
                    body.push(chunk);
                })
                .on('end', () => {
                    body = Buffer.concat(body).toString();
                    console.log(body)

                    const psw = body.split('&')[0].split('=')[1];
                    console.log(psw);
                    const verify = body.split('&')[1].split('=')[1];
                    console.log(verify);

                    response.setHeader('Content-Type', 'application/json');
                    response.statusCode = 200;
                    response.write('{code:200, msg:"Ok POST"}');
                    response.end();
                    });   
            }
            break;
        default:
            response.statusCode = 404;
            response.end();
            break;
    }

});
server.listen(3000);
