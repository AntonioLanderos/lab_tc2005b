const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/login', (request, response, next) => {
    response.render('form')
    const html = fs.readFileSync(path.resolve(__dirname, './../views/form.ejs'), 'utf8') 
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

  response.render('logged_in', {
    psw:psw,
    verify:verify
  })
});

module.exports = router;