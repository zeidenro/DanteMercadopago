const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mongoose = require('mongoose');
      mercadopago = require('mercadopago');


const app = express();

const indexRoutes = require('./routes/index');

mongoose.connect('mongodb://localhost/pago')
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));
    
mercadopago.configure({
    sandbox : true,
    access_token : 'TEST-8204927732026578-062110-9c6ea30224e4ea441fdf99996691ca2c-445880544'
});

app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set(morgan('dev'));


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.use('/', indexRoutes);


app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });

