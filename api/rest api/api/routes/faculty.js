const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
        msg:"this is faculty get rqst"
    })
})

router.post('/', (req,res,next)=>{
    res.status(200).json({
        msg:"this is faculty post rqst"
    })
})


module.exports = router;