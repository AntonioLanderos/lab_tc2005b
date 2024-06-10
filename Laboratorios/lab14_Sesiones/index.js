const http    = require('http');
const express = require('express');
const path    = require('path');
const app     = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const session = require('express-session');
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.set('view engine', 'ejs'); 
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/set-language/:lang', (req, res) => {
    const { lang } = req.params;
    res.cookie('preferredLanguage', lang, { maxAge: 900000, httpOnly: true });
    res.send(`Preferred language set to ${lang}`);
});

// Ruta para mostrar contenido basado en el idioma preferido
app.get('/', (req, res) => {
    const preferredLanguage = req.cookies.preferredLanguage || 'es';
    let message = '';

    switch (preferredLanguage) {
        case 'en':
            message = 'What benefits do you find in the MVC style? Greater ease of maintenance and error detection <br> Do you find any disadvantages in the MVC architectural style? It uses more resources and is more complex at first glance';
            break;
        case 'es':
            message = '¿Qué beneficios encuentras en el estilo MVC? Mayor facilidad para mantenimiento, y detección de errores <br> ¿Encuentras alguna desventaja en el estilo arquitectónico MVC? Utiliza más recursos y es más complejo a simple vista';
            break;
        case 'fr':
            message = 'Quels avantages trouvez-vous dans le style MVC ? Plus grande facilité de maintenance et de détection des erreurs <br> Trouvez-vous des inconvénients dans le style architectural MVC ? Il utilise plus de ressources et est plus complexe à première vue';
            break;
        default:
            message = 'Hello! Welcome to our website.';
            break;
    }

    res.send(message);
});

// Ruta para borrar la preferencia de idioma
app.get('/clear-language', (req, res) => {
    res.clearCookie('preferredLanguage');
    res.send('Preferred language has been cleared');
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);