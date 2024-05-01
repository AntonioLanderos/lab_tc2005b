const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/login', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    const html = fs.readFileSync(path.resolve(__dirname, './../form.html'), 'utf8')
    response.write(html);
    response.end();  
});

router.post('/login', (request, response, next) => {
    const psw = request.body.psw;
    console.log(psw);
    const verify = request.body.verify
    console.log(verify);


fs.appendFile('datos.txt', psw + '\n' + verify + '\n', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Data saved');
    }
});

    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write('{code:200, msg:"Ok POST"}');
    response.end();
});

module.exports = router;