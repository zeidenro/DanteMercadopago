const controller = {};
var mercadopago = require('mercadopago');
mercadopago.configure({
	sandbox : true,
	access_token : 'TEST-8204927732026578-062110-9c6ea30224e4ea441fdf99996691ca2c-445880544'
});

const Task = require('../models/task');
const Vista = require('../models/visita');



controller.normal = (req , res)=> {
    var preference = {
        payer : {
            email : 'pagador@gmail.com'
        },
        items : [
            {
                'id' : '1',
                'title' : 'Normal',
                'quantity' : 1,
                'unit_price' : 35000,
                'currency_id' : 'CLP'
            }
        ]
    };
    mercadopago.preferences.create(preference)
        .then(function(respuesta){
            var link = 
            respuesta.body.sandbox_init_point;
            console.log("link para pagar :");
            console.log(link);	
            res.redirect(link);
        });
}
controller.avanzado = (req , res)=> {
    var preference = {
        payer : {
            email : 'pagador@gmail.com'
        },
        items : [
            {
                'id' : '2',
                'title' : 'avanzado',
                'quantity' : 1,
                'unit_price' : 50000,
                'currency_id' : 'CLP'
            }
        ]
    };
    mercadopago.preferences.create(preference)
        .then(function(respuesta){
            var link = 
            respuesta.body.sandbox_init_point;
            console.log("link para pagar :");
            console.log(link);	
            res.redirect(link);
        });
}
controller.prueba = (req , res)=> {
    var preference = {
        payer : {
            email : 'pagador@gmail.com'
        },
        items : [
            {
                'id' : '3',
                'title' : 'prueba',
                'quantity' : 1,
                'unit_price' : 20000,
                'currency_id' : 'CLP'
            }
        ]
    };
    mercadopago.preferences.create(preference)
        .then(function(respuesta){
            var link = 
            respuesta.body.sandbox_init_point;
            console.log("link para pagar :");
            console.log(link);	
            res.redirect(link);
        });
}



controller.verCompra = (req, res)=>{
    mercadopago.payment.search()
	.then(function(respuestaMP) {
		res.send("Mis Pagos:" + 
			JSON.stringify(respuestaMP));
	})
	.catch(function(err) {
		res.send("error" + 
			JSON.stringify(err));
    });
    const task = new Task(req.body);
    task.save();
    console.log(req.body);
}

controller.crearVista = (req, res)=>{
    const vista = new Vista(req.body);
    vista.save();
    console.log(req.body);
    res.send('guardado');
}



module.exports = controller;