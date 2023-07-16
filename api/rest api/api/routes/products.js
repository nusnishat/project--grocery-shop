const express = require('express');
const products = require('../model/products');
const router = express.Router();
const Products = require('../model/products');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'da01skdwc', 
    api_key: '994849219464794', 
    api_secret: 'h8etmIkhf9j3M2FLK9vdiszAONE' 
  });

// get request
router.get('/', (req,res,next)=>{
    Products.find()
    .then(result=>{
        res.status(200).json({
            productsData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
})

// post request
router.post('/', (req,res,next)=>{
    console.log(req.body);
    const file = req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
        console.log(result);
        const products = new Products({
            _id:new mongoose.Types.ObjectId,
            title:req.body.title,
            department:req.body.department,
            description:req.body.description,
            quantity:req.body.quantity,
            price:req.body.price,
            stock:req.body.stock,
            imagePath:result.url
           });
           products.save()
           .then(result =>{
               console.log(result);
               res.status(200).json({
                   newProducts:result
               })
           })
           .catch(err=>{
               res.status(500).json({
                   error:err
               })
           })
    });
})


module.exports = router;