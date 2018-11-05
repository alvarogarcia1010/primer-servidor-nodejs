const express = require('express');
const morgan = require('morgan');
const swig  = require('swig');
const app = express();

const routes = require('./routes');
const routesApi = require('./routes-api');

// Configuraciones
app.set('appName', "Mi primer servidor");

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', true);
swig.setDefaults({ cache: false });

// Middlewares
app.use(morgan('dev'));

//Rutas
app.use(routes);
app.use('/api', routesApi);

app.get('*', (req, res) => {
  res.end('Not found');
});

//Puerto de escucha
app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
  console.log(app.get('appName'));
});
