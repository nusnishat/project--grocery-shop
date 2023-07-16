const express = require('express');
const app = express();
const cors = require('cors');

const productsRoute = require('./api/routes/products');
const facultyRoute = require('./api/routes/faculty');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

// mongoDB connection
mongoose.connect('mongodb+srv://nishat:QxKR28F85Ev2W9P@cluster0.wny9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

mongoose.connection.on('error',err =>{
    console.log('connection failed');
});

mongoose.connection.on('connected', connected=>{
    console.log('connected with database');
});

app.use(fileUpload({
    useTempFiles:true 
}))

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use('/products',productsRoute);
app.use('/faculty',facultyRoute);

app.use((req,res,next)=>{
     res.status(200).json({
         message:'app is running'
     })
 })
 module.exports = app;
//  username:nishat
//  pass:QxKR28F85Ev2W9P