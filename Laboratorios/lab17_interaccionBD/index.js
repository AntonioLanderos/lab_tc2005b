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

const books = [
    { BookID: 1, Title: 'Libro 1', SeriesID: 1, AuthorID: 1 },
    { BookID: 2, Title: 'Libro 2', SeriesID: 2, AuthorID: 2 },
    // Añade más libros según sea necesario
];

const dashboardRoutes = require('./routes/dashboard.routes');
app.use('/dashboard', dashboardRoutes);

app.get('/', async(request, response, next) => {
     response.render('dashboard',
        {
            books:books
        }
     )
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);