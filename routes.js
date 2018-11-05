const express = require('express');
const router = express.Router();
//Rutas
router.get('/', (req, res) => {
  res.render('index', {pagename: 'awesome people', authors: ['Paul', 'Jim', 'Jane'] });
});

router.get('/login', (req, res) => {
  res.end('Aquí va el login');
});

module.exports = router;
