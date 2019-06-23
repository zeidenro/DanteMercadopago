const express = require('express');
var mercadopago = require('mercadopago');

const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', (req, res)=>{
    res.render('pago');
});
router.post('/addNormal', controller.normal);

router.post('/addAvanzado', controller.avanzado);

router.post('/addPrueba', controller.prueba);

router.get('/verPago', controller.verCompra);

router.get('/vistas', (req, res)=>{
    res.render('agregar');
});
router.post('/agregar', controller.crearVista);

module.exports = router;