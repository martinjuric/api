const express = require ('express');
const router = express.Router();


router.get('/', (req, res, next)=>{

    res.status(200).json({
        message:'Get req to /Korisnik'
    });

});

router.post('/', (req, res, next)=>{

    const korisnik ={
        name: req.body.name,
        racunID: req.body.racunID,
        KorisnikID: req.body.KorisnikID

    }

    res.status(201).json({
        message:'post req to /Korisnik'
        
    });

});


router.get('/:KorisnikID', (req, res, next) =>{

    const id = req.params.KorisnikID;
    if(id === 'special'){
        res.status(200).json({
            message:'id',
            id: id
        });

    }
    else{
        res.status(200).json({

            message: 'Passed ID'

        });
    }

});



router.patch('/:KorisnikID', (req, res, next) =>{

    
        res.status(200).json({
            message:'Updated',
          
        });
});


router.delete('/:KorisnikID', (req, res, next) =>{

    
    res.status(200).json({
        message:'Deleted',
      
    });
});



module.exports=router;