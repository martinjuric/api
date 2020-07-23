const express = require ('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Fetch'
    });
});

router.post('/', (req, res, next) => {
    const racun = {
        korisnikID: req.body.korisnikID,
        kolicina: req.body.kolicina
    }
    res.status(201).json({
        message: 'Racun',
        kreiranRacun: racun,
        racun: racun
    });
});


router.get('/:RacunID', (req, res, next) => {
    res.status(200).json({
        message: 'Detalji',
        RacunID: req.params.RacunID
    });
});

router.delete('/:RacunID', (req, res, next) => {
    res.status(200).json({
        message: 'Izbrisano',
        RacunID: req.params.RacunID
    });
});


module.exports=router;