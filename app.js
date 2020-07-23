const express = require('express');
const app = express();
const morgan = require ('morgan');
const bodyP = require('body-parser');


const racunRoutes = require('./api/routes/racun');
const korisnikRoutes = require('./api/routes/Korisnik');


app.use(morgan('dev'));
app.use(bodyP.urlencoded({extended: false}));
app.use(bodyP.json());

app.use((req, res, next) =>{

    res.header('Access-control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method === 'OPTIONS'){

        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});

    }

});

//Routes za request
app.use('/Korisnik', korisnikRoutes);
app.use('/racun', racunRoutes);

app.use((req, res, next) =>{

    const error = new Error('Not found');
    error.status = 404;
    next(error);


})

app.use((error, req, res, next) =>{

    res.status(error.status || 500);
    res.json({
        error:
        {
            message: error.message
        }
    });

});



module.exports = app;