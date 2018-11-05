
// Iniciar un servidor sin ocupar express
const http = require('http');

http.createServer((req,res)=>{
  res.end('Hello World');
}).listen(3000);

//Middlewares propios

app.use(function(req, res, next) {
  console.log('request url: ' + req.url);
  next();
});

app.use((req, res, next) => {
    console.log(req.url + ' ha pasado por esta funcion');
    next();
});
